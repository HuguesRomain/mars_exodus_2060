import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SendComment } from "./organismes/SendComment";
import { PostItem } from "./organismes/PostItem";
import { rem } from "polished";
import { Advertisement } from "./organismes/advertisement";
import { isMobile } from "exodus/utils/checkWindowSize";
import { breakPoint } from "styles/const";
import { AppContext } from "exodus/context";

const SocialPart = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100vw;
  @media (min-width: ${breakPoint.tabletPortrait}) {
    padding: ${rem(50)};
    width: 100vw;
  }

  @media (min-width: ${breakPoint.desktop}) {
    width: 60vw;
  }
`;

const Pub = styled.div`
  width: 30vw;
  right: 0;
  position: fixed;
  height: 100vh;
`;

export const SocialPage = ({ allPosts }: any) => {
  const [postItems, setPostItems] = useState<Posts[]>();
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;

  useEffect(() => {
    setPostItems(allPosts);
  }, [allPosts]);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SocialPart>
        <div>
          <SendComment
            postItems={postItems && postItems}
            setPostItems={setPostItems}
          />
          <ul>
            {postItems &&
              postItems.map((value: Posts, i) => {
                return <PostItem key={i} post={value} />;
              })}
          </ul>
        </div>
      </SocialPart>
      {!isMobile(windowSize) && (
        <Pub>
          <Advertisement />
        </Pub>
      )}
    </div>
  );
};
