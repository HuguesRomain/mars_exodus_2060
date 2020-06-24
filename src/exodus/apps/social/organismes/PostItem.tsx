import React from "react";
import styled from "styled-components";
import { Like } from "../atoms/Like";
import { Comment } from "../atoms/Comment";
import { Share } from "../atoms/Share";
/* import { CommentItem } from "./CommentItem"; */

const Item = styled.li`
  list-style-type: none;
  max-width: 500px;
  border-radius: 20px;
  background-color: white;
  padding: 15px;
  margin: 20px auto;
`;
const UserInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  background-color: yellow;
`;
const Author = styled.h1`
  font-weight: bold;
  font-size: 14px;
  padding-left: 10px;
`;
const Since = styled.p`
  margin-left: auto;
`;
const PostText = styled.p`
  padding-top: 10px;
`;
const Interact = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

type Props = {
  posts: Posts;
};

export const PostItem = ({ posts }: Props) => {
  const theDay = posts.date.toLocaleString("default", { weekday: "long" });

  return (
    <>
      <Item>
        <UserInfo>
          <Avatar src={posts.avatar} alt="avatar" />
          <Author>{posts.author}</Author>
          <Since>il y a {theDay}</Since>
        </UserInfo>
        <PostText>{posts.text}</PostText>
        <Interact>
          <Share />
          <Like quantity={0} />
          <Comment quantity={posts.comment.length} />
        </Interact>
      </Item>
      {/* {posts.comment &&
        posts.comment.map((value) => {
          return <CommentItem key={value.author} comments={value} />;
        })} */}
    </>
  );
};
