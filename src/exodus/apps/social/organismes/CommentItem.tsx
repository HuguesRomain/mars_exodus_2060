import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { color, space } from "styles/const";
import { isMobileOnly } from "react-device-detect";

const Comment = styled.li`
  list-style-type: none;
  max-width: 500px;
  display: flex;
  margin: 10px auto 0;
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
  background-color: ${isMobileOnly && color.light.PureWhite};
  border-radius: 20px;
  padding: ${space.s};
  width: 100%;
`;
const Author = styled.p`
  font-weight: 500;
`;
const Since = styled.p`
  display: inline;
  margin-left: 10px;
  color: ${color.medium.Manatee};
`;
const Text = styled.p`
  margin-top: 5px;
  color: ${color.darker.LuckyPoint};
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
        <div style={{ display: "flex", marginBottom: rem(10) }}>
          <Author>{comments.author}</Author>
          <Since>il y a {theDay}</Since>
        </div>
        <Text>{comments.text}</Text>
      </Content>
    </Comment>
  );
};
