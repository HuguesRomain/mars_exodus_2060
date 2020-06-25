import React from "react";
import styled from "styled-components";
import { Like } from "../atoms/Like";
import { Comment } from "../atoms/Comment";
import { Share } from "../atoms/Share";
import { CommentItem } from "./CommentItem";
import { iconSize, color, space } from "styles/const";
import { rem } from "polished";
import { isMobile } from "react-device-detect";
import { AddComment } from "../molecules/AddComment";
import { Avatar } from "../atoms/Avatar";

const Item = styled.li`
  list-style-type: none;
  max-width: 500px;
  border-radius: 20px;
  background-color: white;
  padding: ${space.s};
  margin: 20px auto;
`;
const UserInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Author = styled.h1`
  font-weight: 600;
  font-size: 14px;
  padding-left: 10px;
  color: ${color.darker.LuckyPoint};
`;
const Since = styled.p`
  margin-left: auto;
  color: ${color.medium.Manatee};
`;
const PostText = styled.p`
  padding: ${rem(10)} 0;
  color: ${color.darker.LuckyPoint};
  line-height: 30px;
`;
const Interact = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${rem(10)} 0;
  border-bottom: solid 1px ${color.light.WhiteSmoke};
`;

type Props = {
  posts: Posts;
};

export const PostItem = ({ posts }: Props) => {
  const theDay = posts.date.toLocaleString("default", { weekday: "long" });
  return (
    <Item>
      <UserInfo>
        <Avatar src={posts.avatar} size={isMobile ? iconSize.l : iconSize.xl} />
        <Author>{posts.author}</Author>
        <Since>il y a {theDay}</Since>
      </UserInfo>
      <PostText>{posts.text}</PostText>
      <Interact>
        <Share />
        <Comment quantity={posts.comment.length} />
        <Like quantity={0} />
      </Interact>
      {!isMobile &&
        posts.comment &&
        posts.comment.map((value) => {
          return <CommentItem key={value.author} comments={value} />;
        })}
      {!isMobile && <AddComment />}
    </Item>
  );
};
