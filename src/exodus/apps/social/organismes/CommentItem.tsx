import React from "react";
import styled from "styled-components";
import { color, space, iconSize } from "styles/const";
import { Avatar } from "../atoms/Avatar";
import { isMobileOnly } from "exodus/utils/checkWindowSize";

const Comment = styled.li`
  list-style-type: none;
  display: flex;
  margin: ${space.xs} auto 0;
`;

const Content = styled.div`
  background-color: ${isMobileOnly() && color.light.PureWhite};
  border-radius: 20px;
  padding: ${space.s};
  width: 100%;
`;

const Author = styled.p`
  font-weight: 500;
`;

const Since = styled.p`
  display: inline;
  margin-left: ${space.xs};
  color: ${color.medium.Manatee};
`;

const Text = styled.p`
  margin-top: ${space.xs};
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
      <Avatar src={comments.avatar} size={iconSize.l} />
      <Content>
        <div style={{ display: "flex", marginBottom: space.xs }}>
          <Author>{comments.author}</Author>
          <Since>il y a {theDay}</Since>
        </div>
        <Text>{comments.text}</Text>
      </Content>
    </Comment>
  );
};
