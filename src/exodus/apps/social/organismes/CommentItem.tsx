import React from "react";
import styled from "styled-components";
import {
  color,
  space,
  iconSize,
  transitionTime,
  breakPoint,
} from "styles/const";
import { Avatar } from "../atoms/Avatar";
import { isMobileOnly } from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/context";

const Comment = styled.li`
  list-style-type: none;
  display: flex;
  margin: ${space.xs} auto 0;
`;

const Content = styled.div<{ isDark: boolean }>`
  background-color: ${(props) =>
    isMobileOnly()
      ? !props.isDark
        ? color.light.PureWhite
        : color.darker.BlackPearl
      : "transparent"};
  border-radius: 20px;
  padding: ${space.s};
  width: 100%;
  transition: ${transitionTime};

  @media (max-width: ${breakPoint.mobileOnly}) {
    margin-left: ${space.s};
    line-height: 30px;
    padding: ${space.xs} ${space.s};
  }
`;

const Author = styled.p<{ isDark: boolean }>`
  font-weight: 500;
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  transition: ${transitionTime};
`;

const Since = styled.p`
  display: inline;
  margin-left: ${space.xs};
  color: ${color.medium.Manatee};
`;

const Text = styled.p<{ isDark: boolean }>`
  margin-top: ${space.xs};
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
  transition: ${transitionTime};
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
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <Comment>
      <Avatar src={comments.avatar} size={iconSize.l} />
      <Content isDark={isDark}>
        <div style={{ display: "flex", marginBottom: space.xs }}>
          <Author isDark={isDark}>{comments.author}</Author>
          <Since>il y a {theDay}</Since>
        </div>
        <Text isDark={isDark}>{comments.text}</Text>
      </Content>
    </Comment>
  );
};
