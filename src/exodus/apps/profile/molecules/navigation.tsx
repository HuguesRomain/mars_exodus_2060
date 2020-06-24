import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { profileAppRouter, UriType } from "exodus/internal-router";
import { rem } from "polished";
import { isMobile } from "react-device-detect";
import { color } from "styles/const";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${rem(10)};
  padding: ${rem(10)};
`;

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  color: ${color.darker.LuckyPoint};
`;

const Dot = styled.span`
  width: ${rem(7)};
  height: ${rem(7)};
  border-radius: 50px;
  background-color: ${color.SunsetOrange};
  margin-top: ${rem(10)};
`;

export const ProfileNavigation = () => {
  const currentPath = window.document.location.pathname;
  const [path, setPath] = useState<UriType>(currentPath);

  useEffect(() => {
    const FakeUserToken = 1;

    if (isMobile && currentPath === "/app/profile/") {
      window.history.replaceState(
        null,
        "",
        `/app/profile/identity/${FakeUserToken}`
      );
      setPath(profileAppRouter.identity("1"));
    }
  }, [currentPath]);

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
        {path === profileAppRouter.identity("1") && <Dot />}
      </LinkWrapper>
      <LinkWrapper
        onClick={() => {
          setPath(profileAppRouter.ticket("1"));
        }}
        to={profileAppRouter.ticket("1")}
      >
        <Text>Billet</Text>
        {path === profileAppRouter.ticket("1") && <Dot />}
      </LinkWrapper>
    </NavigationWrapper>
  );
};
