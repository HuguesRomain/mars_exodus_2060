import React from "react";
import styled from "styled-components";
import { apps } from "./data/index";

import { rem } from "polished";
import { color, breakPoint, space, transitionTime } from "styles/const";
import { LabeledIcon } from "./atoms/labeledIcon";
import { IconMarsExodus } from "./atoms/IconMarsExodus";
import { ThemePicker } from "./atoms/themePicker";
import { PlanetsDate } from "./organisms/planetDate";
import { isMobileOnly } from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/context";

const NavBar = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <WrapperNavigation isDark={isDark}>
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
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;
  return isMobileOnly(windowSize) ? <NavBarMobile /> : <NavBar />;
};

const WrapperMobileNavigation = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  padding: ${rem(15)} ${rem(20)};
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
  border-radius: 20px 20px 0px 0px;
  z-index: 100000;
  transition: ${transitionTime};
`;

const WrapperNavigation = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: ${rem(15)} ${rem(20)};
  overflow: hidden;
  position: fixed;
  left: 0;
  width: ${rem(96)};
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
  border-radius: 0px 20px 20px 0px;
  z-index: 100000;
  transition: ${transitionTime};
`;

export const LabelOverlay = styled.p<{ isDark: boolean; linkActive?: boolean }>`
  color: ${(props) =>
    !props.linkActive
      ? color.medium.Manatee
      : !props.isDark
      ? color.darker.BlackRussian
      : color.light.PureWhite};

  @media (min-width: ${breakPoint.desktop}) {
    padding-top: ${space.xs};
  }
  transition: ${transitionTime};
`;

const ListItemMenuLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${rem(300)};
`;

const NavBarMobile = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <WrapperMobileNavigation isDark={isDark}>
      {apps.map((app, i) => {
        return <LabeledIcon key={i} app={app} />;
      })}
    </WrapperMobileNavigation>
  );
};
