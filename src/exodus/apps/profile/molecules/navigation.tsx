import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { profileAppRouter, UriType } from "exodus/internal-router";
import { rem } from "polished";
import { isMobile } from "react-device-detect";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${rem(10)};
`;

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p``;

export const ProfileNavigation = () => {
  const [path, setPath] = useState<UriType>(profileAppRouter.identity("1"));

  useEffect(() => {
    const FakeUserToken = 1;
    const currentPath = window.document.location.pathname;
    if (isMobile && currentPath === "/app/profile/") {
      window.history.replaceState(
        null,
        "",
        `/app/profile/identity/${FakeUserToken}`
      );
    }
  }, []);

  return (
    <NavigationWrapper>
      <LinkWrapper
        style={{ marginRight: rem(90) }}
        onClick={() => {
          setPath(profileAppRouter.identity("1"));
        }}
        to={profileAppRouter.identity("1")}
      >
        <Text>Identité</Text>
        {path === profileAppRouter.identity("1") && (
          <p style={{ fontSize: "30px" }}>•</p>
        )}
      </LinkWrapper>
      <LinkWrapper
        onClick={() => {
          setPath(profileAppRouter.ticket("1"));
        }}
        to={profileAppRouter.ticket("1")}
      >
        <Text>Billet</Text>
        {path === profileAppRouter.ticket("1") && (
          <p style={{ fontSize: "30px" }}>•</p>
        )}
      </LinkWrapper>
    </NavigationWrapper>
  );
};
