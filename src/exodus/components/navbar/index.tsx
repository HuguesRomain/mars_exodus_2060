import React from "react";
import styled from "styled-components";
import { apps } from "./data/index";

import { rem } from "polished";
import { color, breakPoint, space } from "styles/const";
import { LabeledIcon } from "./atoms/labeledIcon";
import { IconMarsExodus } from "./atoms/IconMarsExodus";
import { ThemePicker } from "./atoms/themePicker";
import { PlanetsDate } from "./organisms/planetDate";
import { isMobileOnly } from "exodus/utils/checkWindowSize";

const WrapperMobileNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: ${rem(15)} ${rem(20)};
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  z-index: 100000;
`;

const WrapperNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${rem(15)} ${rem(20)};
  overflow: hidden;
  position: fixed;
  left: 0;
  width: ${rem(96)};
  height: 100%;
  background-color: white;
  border-radius: 0px 20px 20px 0px;
  z-index: 100000;
`;

export const LabelOverlay = styled.p<{ linkActive?: boolean }>`
  color: ${(props) =>
    !props.linkActive ? color.medium.Manatee : color.darker.BlackRussian};

  @media (min-width: ${breakPoint.desktop}) {
    padding-top: ${space.xs};
  }
`;

const ListItemMenuLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${rem(300)};
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
  return isMobileOnly() ? <NavBarMobile /> : <NavBar />;
};
