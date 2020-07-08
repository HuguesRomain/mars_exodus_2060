import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Comment } from "../atoms/Comment";
import { CommentItem } from "./CommentItem";
import {
  iconSize,
  color,
  space,
  fontSize,
  fontWeight,
  transitionTime,
} from "styles/const";
import { AddComment } from "../molecules/AddComment";
import { Avatar } from "../atoms/Avatar";
import { isMobile, isMobileOnly } from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/context";
import { GetUser, GetImage } from "exodus/services/social/social.hook";
import { formatDistanceToNow } from "date-fns";
import { rem } from "polished";

type Props = {
  post: Posts;
  callBack: () => void;
};

export const PostItem = ({ callBack, post }: Props) => {
  const [infoUser, setInfoUser] = useState<UserType>();
  const [Images, setImages] = useState<string>();
  const [isFullScreenImage, setIsFullScreenImage] = useState<boolean>(false);
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const [windowSize] = Context.windowSizeContext;
  useEffect(() => {
    GetUser(post.author)
      .then((data) => {
        setInfoUser(data);
      })
      .catch(() => {});
    if (post.images && post.images[0]) {
      GetImage(post.images && post.images[0]).then((data) => {
        setImages(data);
      });
    }
  }, [post, Images]);

  const avatarPicture = (() => {
    return infoUser && infoUser.profilePicture
      ? `https://symfony-xmt3.frb.io${infoUser.profilePicture}`
      : "https://pbs.twimg.com/media/EapZFw1XgAA1LEW?format=jpg&name=small";
  })();

  const PublishDate = (() => {
    if (post.published)
      return formatDistanceToNow(new Date(post.published), {
        addSuffix: true,
        includeSeconds: true,
      });
  })();

  return (
    <Item isDark={isDark}>
      <UserInfo>
        <Avatar
          src={avatarPicture}
          size={isMobile(windowSize) ? iconSize.l : iconSize.xl}
        />
        <Author isDark={isDark}>{infoUser && infoUser.name}</Author>
        <Since>{PublishDate}</Since>
      </UserInfo>
      <PostText isDark={isDark}>{post.content}</PostText>
      <PostImage
        style={!Images ? { display: "none" } : {}}
        src={Images}
        alt="Image of post"
        onClick={() => {
          setIsFullScreenImage(true);
        }}
      />
      {isFullScreenImage && (
        <Box
          onClick={() => {
            setIsFullScreenImage(false);
          }}
        >
          <Img src={Images} alt="" />
        </Box>
      )}
      <Interact>
        <Comment
          postId={post["@id"]}
          comments={post.comments}
          quantity={post.comments?.length}
        />
      </Interact>
      {!isMobileOnly(windowSize) && (
        <AddComment callBack={callBack} postId={post["@id"]} />
      )}
      <ul>
        {!isMobileOnly(windowSize) &&
          post.comments &&
          post.comments.map((value, i) => {
            return <CommentItem key={i} comment={value} />;
          })}
      </ul>
    </Item>
  );
};

const dark = css`
  color: ${color.light.PureWhite};
`;

const PostImage = styled.img`
  width: 100%;
  height: 228px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
`;

const Item = styled.li<{ isDark: boolean }>`
  list-style-type: none;
  max-width: 550px;
  border-radius: 20px;
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
  padding: ${space.s};
  margin: ${space.m} auto;
  transition: ${transitionTime};
`;
const UserInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Author = styled.h1<{ isDark: boolean }>`
  font-weight: ${fontWeight.avenir.m};
  font-size: ${fontSize.l};
  padding-left: ${space.s};
  color: ${color.darker.LuckyPoint};
  ${(props) => props.isDark && dark};
  transition: ${transitionTime};
`;

const Since = styled.p`
  margin-left: auto;
  color: ${color.medium.Manatee};
  font-size: ${fontSize.s};
`;

const PostText = styled.p<{ isDark: boolean }>`
  padding: ${space.s} 0;
  color: ${color.darker.LuckyPoint};
  line-height: 30px;
  ${(props) => props.isDark && dark};
  transition: ${transitionTime};
`;

const Interact = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${space.xs} 0;
`;

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 200000000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  cursor: pointer;
`;

const Img = styled.img`
  max-width: ${rem(500)};
`;
