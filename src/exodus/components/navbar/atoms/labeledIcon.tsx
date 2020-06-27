import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Icon } from "styles/atoms/icons";
import { AppsTypes } from "../data";
import {
  color,
  iconSize,
  fontSize,
  space,
  breakPoint,
  transitionTime,
} from "styles/const";
import { LabelOverlay } from "..";
import { rem } from "polished";
import {
  isTabletPortrait,
  isMobileOnly,
  isDesktop,
} from "exodus/utils/checkWindowSize";
import { isLocation } from "exodus/utils/uriUtils";
import { AppContext } from "exodus/context";

const ListItemMenuLink = styled.a<{ linkActive?: boolean }>`
  display: flex;
  align-items: center;
  font-size: ${fontSize.s};
  opacity: ${(props) => (!props.linkActive ? 0.7 : 1)};
  @media (min-width: ${breakPoint.tabletPortrait}) {
    padding: ${space.s};
    border-radius: 10px;
    flex-direction: column;
  }

  @media (min-width: ${breakPoint.desktop}) {
    max-width: ${rem(200)};
  }
`;

const IconWrapper = styled.div<{ isDark: boolean }>`
  padding: ${space.xs};
  border-radius: 10px;
  @media (min-width: ${breakPoint.tabletLandscape}) {
    background: ${(props) =>
      !props.isDark ? color.light.AliceBlue : color.darker.BlackPearl};
  }
  transition: ${transitionTime};
`;

export const LabeledIcon = ({ app }: { app: AppsTypes }) => {
  const history = useHistory();
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <ListItemMenuLink
      linkActive={isLocation(app.uri)}
      key={app.icon}
      href={app.uri}
    >
      <IconWrapper isDark={isDark}>
        <Icon
          onClick={() => {
            history.push(app.uri);
          }}
          name={app.icon}
          size={iconSize.m}
          color={
            isLocation(app.uri)
              ? !isDark
                ? color.darker.BlackRussian
                : color.light.PureWhite
              : color.medium.Manatee
          }
        />
      </IconWrapper>
      {isMobileOnly() && isLocation(app.uri) ? (
        <LabelOverlay isDark={isDark} linkActive={isLocation(app.uri)}>
          {app.label}
        </LabelOverlay>
      ) : (
        isTabletPortrait() ||
        (isDesktop() && (
          <LabelOverlay isDark={isDark} linkActive={isLocation(app.uri)}>
            {app.label}
          </LabelOverlay>
        ))
      )}
    </ListItemMenuLink>
  );
};
