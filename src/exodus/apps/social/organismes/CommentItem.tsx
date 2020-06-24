import React from "react";
import styled from "styled-components";

const Comment = styled.div`
  max-width: 500px;
  display: flex;
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  background-color: yellow;
  align-self: center;
`;
const Content = styled.div`
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 10px 13px;
`;
const Author = styled.p`
  display: inline;
  font-weight: bold;
`;
const Since = styled.p`
  display: inline;
  margin-left: 10px;
`;
const Text = styled.p`
  margin-top: 5px;
`;

type Props = {
  comments: {
    author: string;
    avatar: string;
    date: Date;
    text: string;
  };
};

export const CommentItem = ({ comments }: Props) => {
  const theDay = comments.date.toLocaleString("default", { weekday: "long" });

  return (
    <Comment>
      <Avatar src={comments.avatar} alt="avatar of user" />
      <Content>
        <Author>{comments.author}</Author>
        <Since>il y a {theDay}</Since>
        <Text>{comments.text}</Text>
      </Content>
    </Comment>
  );
};
