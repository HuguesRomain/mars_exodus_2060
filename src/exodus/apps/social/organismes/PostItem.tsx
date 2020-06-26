import React from "react";
import styled from "styled-components";
import { Like } from "../atoms/Like";
import { Comment } from "../atoms/Comment";
import { Share } from "../atoms/Share";
import { CommentItem } from "./CommentItem";
import { iconSize, color, space, fontSize, fontWeight } from "styles/const";
import { AddComment } from "../molecules/AddComment";
import { Avatar } from "../atoms/Avatar";
import { isMobile, isMobileOnly } from "exodus/utils/checkWindowSize";

const Item = styled.li`
  list-style-type: none;
  max-width: 550px;
  border-radius: 20px;
  background-color: white;
  padding: ${space.s};
  margin: ${space.m} auto;
`;
const UserInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Author = styled.h1`
  font-weight: ${fontWeight.avenir.m};
  font-size: ${fontSize.l};
  padding-left: ${space.s};
  color: ${color.darker.LuckyPoint};
`;
const Since = styled.p`
  margin-left: auto;
  color: ${color.medium.Manatee};
  font-size: ${fontSize.s};
`;
const PostText = styled.p`
  padding: ${space.s} 0;
  color: ${color.darker.LuckyPoint};
  line-height: 30px;
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
  const theDay = post.date.toLocaleString("default", { weekday: "long" });
  return (
    <Item>
      <UserInfo>
        <Avatar
          src={post.avatar}
          size={isMobile() ? iconSize.l : iconSize.xl}
        />
        <Author>{post.author}</Author>
        <Since>il y a {theDay}</Since>
      </UserInfo>
      <PostText>{post.text}</PostText>
      <Interact>
        <Share />
        <Comment quantity={post.comment.length} />
        <Like quantity={0} />
      </Interact>
      <ul>
        {!isMobileOnly() &&
          post.comment &&
          post.comment.map((value, i) => {
            return <CommentItem key={i} comments={value} />;
          })}
      </ul>
      {!isMobileOnly() && <AddComment />}
    </Item>
  );
};
