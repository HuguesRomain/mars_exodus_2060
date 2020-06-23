import React from "react";
import styled from "styled-components";

const Item = styled.li`
  list-style-type: none;
  max-width: 500px;
  border-radius: 20px;
  background-color: white;
  padding: 15px;
  justify-content: flex-start;
`;
const UserInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const Avatar = styled.img`
  width: 32px;
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
  text-align: center;
  padding-top: 10px;
`;

type Props = {
  posts: Posts;
};

export const PostItem = ({ posts }: Props) => {
  const theDay = posts.date.toLocaleString("default", { weekday: "long" });

  return (
    <Item>
      <UserInfo>
        <Avatar src={posts.avatar} alt="avatar" />
        <Author>{posts.author}</Author>
        <Since>{theDay}</Since>
      </UserInfo>
      <PostText>{posts.text}</PostText>
    </Item>
  );
};
