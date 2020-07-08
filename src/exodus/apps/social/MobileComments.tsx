import React from "react";
import { CommentItem } from "./organismes/CommentItem";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { rem } from "polished";
import { color, transitionTime } from "styles/const";
import { AppContext } from "exodus/context";
import { useLocation } from "react-router-dom";
import { AddComment } from "./molecules/AddComment";

const MobileComments = () => {
  /* const [comments, setComments] = useState<Comments[]>(comment); */
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const location = useLocation();
  // @ts-ignore
  const comments: string[] = location.param1;
  // @ts-ignore
  const postId = location.param2;

  window.scrollTo(0, 0);

  return (
    <MobileCommentStyle isDark={isDark}>
      <BackSection
        onClick={() => {
          window.history.back();
        }}
        isDark={isDark}
      >
        <Icon name={"back"} />
      </BackSection>
      <CommentList isDark={isDark}>
        {comments &&
          comments.map((value, i) => {
            return <CommentItem key={i} comment={value} />;
          })}
      </CommentList>
      <AddComment postId={postId} />
    </MobileCommentStyle>
  );
};

export default MobileComments;

const CommentList = styled.ul<{ isDark: boolean }>`
  padding: 0 ${rem(10)};
  padding-bottom: 140px;
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.DarkestBlack};
`;

const BackSection = styled.div<{ isDark: boolean }>`
  width: 100vw;
  padding: ${rem(20)};
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.DarkestBlack};
  transition: ${transitionTime};
`;

const MobileCommentStyle = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.DarkestBlack};
  transition: ${transitionTime};
`;
