import React from "react";
import styled from "styled-components";
import { SendComment } from "./organismes/SendComment";
import { PostItem } from "./organismes/PostItem";
import { rem } from "polished";
import { Advertisement } from "./organismes/advertisement";
import { isMobile } from "exodus/utils/checkWindowSize";
import { breakPoint } from "styles/const";
import { AppContext } from "exodus/context";
import { useGetPosts } from "exodus/services/social/social.hook";

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

export const SocialPage = () => {
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;

  const InitialPost: any = useGetPosts();
  const allPosts = InitialPost["hydra:member"];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SocialPart>
        <div>
          <SendComment />
          <ul>
            {allPosts &&
              allPosts.map((value: Posts) => {
                return <PostItem key={value.id} post={value} />;
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
