import React from "react";
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
  height: 100vh;
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

export const SocialPage = ({
  posts,
  setposts,
}: {
  posts: Posts[];
  setposts: any;
}) => {
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SocialPart>
        <div>
          <SendComment setposts={setposts} posts={posts} />
          <ul>
            {posts &&
              posts.map((post: Posts, i) => {
                return <PostItem key={i} post={post} />;
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
