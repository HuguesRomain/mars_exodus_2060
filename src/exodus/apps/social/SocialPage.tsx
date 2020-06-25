import React from "react";
import styled from "styled-components";
import { SendComment } from "./organismes/SendComment";
import { PostItem } from "./organismes/PostItem";
import { rem } from "polished";
import { isMobileOnly, isMobile } from "react-device-detect";
import { Advertisement } from "./organismes/advertisement";

const SocialPart = styled.div`
  display: flex;
  justify-content: center;
  padding: ${!isMobileOnly ? rem(50) : "0"};
  width: ${!isMobileOnly ? "60vw" : "100vw"};
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
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SocialPart>
        <div>
          <SendComment setposts={setposts} posts={posts} />
          <ul>
            {posts &&
              posts.map((value: Posts) => {
                return <PostItem key={value.like} posts={value} />;
              })}
          </ul>
        </div>
      </SocialPart>
      {!isMobile && (
        <Pub>
          <Advertisement />
        </Pub>
      )}
    </div>
  );
};
