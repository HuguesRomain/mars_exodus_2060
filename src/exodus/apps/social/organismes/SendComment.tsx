import React, {
  useState,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
} from "react";
import styled from "styled-components";
import { AddMedia } from "../molecules/AddMedia";
import {
  color,
  iconSize,
  space,
  breakPoint,
  transitionTime,
} from "styles/const";
import { Avatar } from "../atoms/Avatar";
import { Icon } from "styles/atoms/icons";
import { AppContext } from "exodus/context";
import { PostBlog, PostImage } from "exodus/services/social/social.hook";
import { UserStorage } from "exodus/utils/accessStorage";

type Props = {
  callBack: () => void;
};

export const SendComment = ({ callBack }: Props) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  let [newPost, setNewPost] = useState("");
  /* let [newImage, setNewImage] = useState<FileList | null>(null); */
  let [UserInfo, setUserInfo] = useState<UserInfoType>();

  const inputEl = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPost(e.target.value);
  };
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") HandleSubmit();
  };
  const HandleSubmit = () => {
    // @ts-ignore
    let files = inputEl.current.files;
    const formdata = new FormData();
    if (files && files.length) formdata.append("file", files[0]);
    PostImage(formdata)
      .then((item) => PostBlog(newPost, item.id))
      .then(() => callBack())
      .catch((err) => console.log(err))
      .finally(() => setNewPost(""));
  };

  useEffect(() => {
    setUserInfo(UserStorage());
  }, []);

  const avatarPicture = (() => {
    return UserInfo && UserInfo.profilePicture
      ? `https://symfony-xmt3.frb.io${UserInfo.profilePicture}`
      : "https://bit.ly/3fbe0m5";
  })();

  return (
    <Content isDark={isDark}>
      <Head>
        <Avatar src={avatarPicture} size={iconSize.xl} />
        <CommentInput
          onChange={handleChange}
          onKeyPress={handleEnter}
          placeholder="Postez quelque chose..."
          value={newPost}
          type="text"
          isDark={isDark}
        />
      </Head>
      <SendAndMore>
        <AddPhoto type="file" id="fileId" ref={inputEl} />
        <label htmlFor="fileId">
          <AddMedia />
        </label>
        <Icon size={iconSize.s} onClick={HandleSubmit} name={"send"} />
      </SendAndMore>
    </Content>
  );
};

const Content = styled.div<{ isDark: boolean }>`
  max-width: 550px;
  border-radius: 20px;
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
  padding: ${space.xs} ${space.m};
  margin: 0 auto;
  transition: ${transitionTime};
  @media (max-width: ${breakPoint.mobileOnly}) {
    margin: ${space.m};
  }
`;
const Head = styled.div`
  display: flex;
`;

const SendAndMore = styled.div`
  margin-top: ${space.m};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CommentInput = styled.input<{ isDark: boolean }>`
  margin-left: ${space.m};
  height: 48px;
  border: none;
  width: 100%;
  color: ${color.medium.Manatee};
  transition: ${transitionTime};
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
`;
const AddPhoto = styled.input.attrs({ type: "file" })`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
`;
