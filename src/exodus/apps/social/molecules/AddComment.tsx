import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import styled from "styled-components";
import { Avatar } from "../atoms/Avatar";
import {
  iconSize,
  color,
  fontSize,
  space,
  transitionTime,
  breakPoint,
} from "styles/const";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";
import { AppContext } from "exodus/context";
import { PostComment } from "exodus/services/social/social.hook";
import { UserStorage } from "exodus/utils/accessStorage";
import { isMobile } from "exodus/utils/checkWindowSize";
import { useHistory } from "react-router-dom";
import { socialAppRouter } from "exodus/internal-router";

type Props = {
  callBack?: () => void;
  postId?: string;
};

const InputComment = ({ callBack, postId }: Props) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const [windowSize] = Context.windowSizeContext;
  let [newComment, setNewComment] = useState("");

  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") HandleSubmit();
  };
  const HandleSubmit = () => {
    PostComment({ newComment, postId })
      .then(() => {
        if (callBack) callBack();
      })
      .catch((err) => console.log(err))
      .finally(() => setNewComment(""));
    if (isMobile(windowSize)) history.push(socialAppRouter.social());
  };

  return (
    <InputCommentStyled>
      <InputStyled
        onChange={handleChange}
        onKeyPress={handleEnter}
        isDark={isDark}
        placeholder="Votre commentaire..."
        value={newComment}
      />
      <Send isDark={isDark}>
        <Icon
          onClick={HandleSubmit}
          color={color.SunsetOrange}
          name={"send"}
          size={iconSize.s}
        />
      </Send>
    </InputCommentStyled>
  );
};

export const AddComment = ({ callBack, postId }: Props) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  let [UserInfo, setUserInfo] = useState<UserInfoType>();

  const avatarPicture = (() => {
    return UserInfo && UserInfo.profilePicture
      ? `https://symfony-xmt3.frb.io${UserInfo.profilePicture}`
      : "https://www.writeups.org/wp-content/uploads/Punisher-netflix-daredevil-Bernthal.jpg";
  })();

  useEffect(() => {
    setUserInfo(UserStorage());
  }, []);

  return (
    <Content isDark={isDark}>
      <ImageAvatar src={avatarPicture} size={iconSize.l} />
      <InputComment callBack={callBack} postId={postId} />
    </Content>
  );
};

const Content = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  padding-top: ${space.s};
  width: 100%;
  margin-top: ${space.xs} 0;
  border-top: 1px solid
    ${(props) =>
      !props.isDark ? color.light.WhiteSmoke : color.darker.LuckyPoint};
  transition: ${transitionTime};
  @media (max-width: ${breakPoint.mobileOnly}) {
    border: none;
    position: fixed;
    bottom: 73px;
    padding-bottom: ${space.s};
  }
`;

const InputCommentStyled = styled.div`
  display: flex;
  margin-left: ${space.s};
  width: 100%;
`;

const InputStyled = styled.input<{ isDark: boolean }>`
  border-radius: 22px 0px 0px 22px;
  border: none;
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.BlackPearl};
  padding: ${space.xs};
  font-size: ${fontSize.s};
  width: 100%;
  transition: ${transitionTime};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  ::placeholder {
    color: ${(props) =>
      !props.isDark ? color.medium.Manatee : color.light.PureWhite};
    padding-left: ${space.xs};
  }
  transition: ${transitionTime};
  @media (max-width: ${breakPoint.mobileOnly}) {
    background-color: ${(props) =>
      !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
    border: none;
    position: sticky;
    bottom: 73px;
  }
`;

const Send = styled.div<{ isDark: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 22px 22px 0px;
  border: none;
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.BlackPearl};
  padding: ${space.xs} ${space.s};
  height: ${rem(40)};
  transition: ${transitionTime};
  @media (max-width: ${breakPoint.mobileOnly}) {
    background-color: ${(props) =>
      !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
  }
`;

const ImageAvatar = styled(Avatar)`
  @media (max-width: ${breakPoint.mobileOnly}) {
    margin-left: ${rem(130)};
    display: none;
  }
`;
