import React from "react";
/* import { CommentItem } from "./organismes/CommentItem"; */
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { rem } from "polished";
import { color, transitionTime } from "styles/const";
import { AppContext } from "exodus/context";

/* const CommentList = styled.ul`
  padding: 0 ${rem(10)};
`; */

const BackSection = styled.div<{ isDark: boolean }>`
  width: 100vw;
  padding: ${rem(10)} 0 0 ${rem(10)};
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.DarkestBlack};
  transition: ${transitionTime};
`;

const MobileCommentStyle = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.DarkestBlack};
  height: 100vh;
  transition: ${transitionTime};
`;

const MobileComments = () => {
  /* const [comments, setComments] = useState<Comments[]>(comment); */
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
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
      {/* <CommentList>
        {comments &&
          comments.map((value, i) => {
            return <CommentItem key={i} comments={value} />;
          })}
      </CommentList> */}
    </MobileCommentStyle>
  );
};

export default MobileComments;
