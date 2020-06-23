import React from "react";
import styled from "styled-components";
import { apps } from "./data/index";

import { rem } from "polished";
import { color } from "styles/const";
import { LabeledIcon } from "./atoms/labeledIcon";
import { isMobileOnly } from "react-device-detect";
import { IconMarsExodus } from "./atoms/IconMarsExodus";
import { ThemePicker } from "./atoms/themePicker";

const WrapperMobileNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const NavBarMobileWrapper = styled.nav`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: ${rem(15)} ${rem(20)};
  background-color: white;
  border-radius: 20px 20px 0px 0px;
`;

const NavBarWrapper = styled.nav`
  overflow: hidden;
  position: fixed;
  left: 0;
  width: ${rem(250)};
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  height: 100vh;

  @media (min-width: 768px) {
    width: ${rem(96)};
  }
`;

const WrapperNavigation = styled.div`
  padding: ${rem(15)} ${rem(20)};
`;

export const LabelOverlay = styled.p<{ linkActive?: boolean }>`
  padding-left: ${rem(5)};
  color: ${(props) =>
    !props.linkActive ? color.medium.LinkWater : color.darker.BlackRussian};

  @media (min-width: 1440px) {
    padding-left: ${rem(10)};
  }
`;

const NavElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${rem(300)};
  margin-top: ${rem(70)};
`;

const NavBarMobile = () => {
  return (
    <WrapperMobileNavigation>
      {apps.map((app, i) => {
        return <LabeledIcon key={i} app={app} />;
      })}
    </WrapperMobileNavigation>
  );
};

const NavBar = () => {
  return (
    <WrapperNavigation>
      <IconMarsExodus />
      <NavElementWrapper>
        {apps.map((app, i) => {
          return <LabeledIcon key={i} app={app} />;
        })}
      </NavElementWrapper>
      <ThemePicker />
    </WrapperNavigation>
  );
};

export const NavBarContainer = () => {
  return (
    <>
      {isMobileOnly ? (
        <NavBarMobileWrapper>
          <NavBarMobile />
        </NavBarMobileWrapper>
      ) : (
        <NavBarWrapper>
          <NavBar />
        </NavBarWrapper>
      )}
    </>
  );
};
