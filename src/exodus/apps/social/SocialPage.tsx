import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SendComment } from "./organismes/SendComment";
import { PostItem } from "./organismes/PostItem";
import { rem } from "polished";
import { Advertisement } from "./organismes/advertisement";
import { isMobile } from "exodus/utils/checkWindowSize";
import { breakPoint } from "styles/const";
import { AppContext } from "exodus/context";
import { getPosts } from "exodus/services/social/social.hook";

export const SocialPage = () => {
  let date = Date.now();
  const [Posts, setPosts] = useState<Posts[]>([]);
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;

  const fetchPosts = () =>
    getPosts()
      .then((data) => {
        if (date <= data.date) {
          date = data.date;
          setPosts(data.posts);
        }
      })
      .catch(() => {});

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, []);

  console.log("test");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SocialPart>
        <div>
          <SendComment callBack={fetchPosts} />
          <ul>
            {Posts.map((value: Posts) => {
              return (
                <PostItem callBack={fetchPosts} key={value.id} post={value} />
              );
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
