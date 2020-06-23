import React from "react";
import styled from "styled-components";
import { apps } from "./data/index";

import { rem } from "polished";
import { color } from "styles/const";
import { LabeledIcon } from "./atoms/labeledIcon";
import { isMobileOnly } from "react-device-detect";
import { IconMarsExodus } from "./atoms/IconMarsExodus";
import { ThemePicker } from "./atoms/themePicker";
import { PlanetsDate } from "./organisms/planetDate";

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
  z-index: -1;
`;

const NavBarWrapper = styled.nav`
  overflow: hidden;
  position: fixed;
  left: 0;
  width: ${rem(96)};
  background-color: white;
  border-radius: 0px 20px 20px 0px;
  height: 100vh;
  z-index: 100000000;
`;

const WrapperNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${rem(15)} ${rem(20)};
`;

export const LabelOverlay = styled.p<{ linkActive?: boolean }>`
  color: ${(props) =>
    !props.linkActive ? color.medium.Manatee : color.darker.BlackRussian};

  @media (min-width: 1440px) {
    padding-top: ${rem(10)};
  }
`;

const ListItemMenuLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${rem(300)};
  margin-top: ${rem(40)};
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
      <ListItemMenuLinkWrapper>
        {apps.map((app, i) => {
          return <LabeledIcon key={i} app={app} />;
        })}
      </ListItemMenuLinkWrapper>
      <div style={{ marginTop: rem(100) }}>
        <ThemePicker />
        <PlanetsDate />
      </div>
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
