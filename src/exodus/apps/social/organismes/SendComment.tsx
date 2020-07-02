import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import { AddMedia } from "../molecules/AddMedia";
import {
  color,
  iconSize,
  space,
  breakPoint,
  transitionTime,
} from "styles/const";
import { Avatar } from "../atoms/Avatar";
import { Icon } from "styles/atoms/icons";
import { AppContext } from "exodus/context";

const Content = styled.div<{ isDark: boolean }>`
  max-width: 550px;
  border-radius: 20px;
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
  padding: ${space.xs} ${space.m};
  margin: 0 auto;
  transition: ${transitionTime};
  @media (max-width: ${breakPoint.mobileOnly}) {
    margin: ${space.m};
  }
`;
const Head = styled.div`
  display: flex;
`;

const SendAndMore = styled.div`
  margin-top: ${space.m};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CommentInput = styled.input<{ isDark: boolean }>`
  margin-left: ${space.m};
  height: 48px;
  border: none;
  width: 100%;
  color: ${color.medium.Manatee};
  transition: ${transitionTime};
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
`;

type Props = {
  posts: Posts[];
  setposts: (value: Posts[]) => void;
};

export const SendComment = ({ setposts, posts }: Props) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  let [newComment, setNewComment] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };
  const handleSubmit = () => {
    setposts([
      ...posts,
      {
        author: "Frank Castle",
        avatar:
          "https://www.writeups.org/wp-content/uploads/Punisher-netflix-daredevil-Bernthal.jpg",
        date: new Date(),
        text: newComment,
        like: 0,
        comment: [],
      },
    ]);
    setNewComment("");
  };
  return (
    <Content isDark={isDark}>
      <Head>
        <Avatar
          src="https://www.writeups.org/wp-content/uploads/Punisher-netflix-daredevil-Bernthal.jpg"
          size={iconSize.xl}
        />
        <CommentInput
          onChange={handleChange}
          onKeyPress={handleEnter}
          placeholder="Postez quelque chose..."
          value={newComment}
          type="text"
          isDark={isDark}
        />
      </Head>
      <SendAndMore>
        <AddMedia />
        <Icon size={iconSize.s} onClick={handleSubmit} name={"send"} />
      </SendAndMore>
    </Content>
  );
};
