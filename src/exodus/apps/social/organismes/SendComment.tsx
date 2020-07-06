import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
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
import { PostBlog /* PostImage  */ } from "exodus/services/social/social.hook";
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

  /* const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files;
    let formdata = new FormData();
    if (file) {
      formdata.append("inpFile", file[0], "Tank");
      PostImage(formdata);
      console.log(formdata);
    }
  }; */

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPost(e.target.value);
  };
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") HandleSubmit();
  };
  const HandleSubmit = () => {
    PostBlog(newPost)
      /* .then(() => PostImage(newImage)) */
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
      : "https://www.writeups.org/wp-content/uploads/Punisher-netflix-daredevil-Bernthal.jpg";
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
        <AddMedia />
        <Icon size={iconSize.s} onClick={HandleSubmit} name={"send"} />
        {/* <input type="file" id="fileId" onChange={handleFile} /> */}
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
