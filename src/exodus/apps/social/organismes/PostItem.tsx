import React from "react";
import styled, { css } from "styled-components";
import { Like } from "../atoms/Like";
import { Comment } from "../atoms/Comment";
import { Share } from "../atoms/Share";
/* import { CommentItem } from "./CommentItem"; */
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
import { useGetUser } from "exodus/services/social/social.hook";

const dark = css`
  color: ${color.light.PureWhite};
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

type Props = {
  post: Posts;
};

export const PostItem = ({ post }: Props) => {
  console.log(post);
  const theDay =
    post.published &&
    post.published.toLocaleString("default", { weekday: "long" });
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const [windowSize] = Context.windowSizeContext;

  const [name] = useGetUser(post.author);

  return (
    <Item isDark={isDark}>
      <UserInfo>
        <Avatar
          src="https://pbs.twimg.com/media/EapZFw1XgAA1LEW?format=jpg&name=small"
          size={isMobile(windowSize) ? iconSize.l : iconSize.xl}
        />
        <Author isDark={isDark}>{name && name}</Author>
        <Since>il y a {theDay}</Since>
      </UserInfo>
      <PostText isDark={isDark}>{post.content}</PostText>
      <Interact>
        <Share />
        <Comment quantity={post.comment && post.comment.length} />
        <Like quantity={0} />
      </Interact>
      {/* <ul>
        {!isMobileOnly(windowSize) &&
          post.comment &&
          post.comment.map((value, i) => {
            return <CommentItem key={i} comments={value} />;
          })}
      </ul> */}
      {!isMobileOnly(windowSize) && <AddComment />}
    </Item>
  );
};
