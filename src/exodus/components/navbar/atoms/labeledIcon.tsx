import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Icon } from "styles/atoms/icons";
import { AppsTypes } from "../data";
import { color, iconSize, fontSize, space, breakPoint } from "styles/const";
import { LabelOverlay } from "..";
import { rem } from "polished";
import {
  isTabletPortrait,
  isMobileOnly,
  isDesktop,
} from "exodus/utils/checkWindowSize";
import { isLocation } from "exodus/utils/uriUtils";

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

const IconWrapper = styled.div`
  padding: ${space.xs};
  border-radius: 10px;
  @media (min-width: ${breakPoint.tabletLandscape}) {
    background: ${color.light.AliceBlue};
  }
`;

export const LabeledIcon = ({ app }: { app: AppsTypes }) => {
  const history = useHistory();
  return (
    <ListItemMenuLink
      linkActive={isLocation(app.uri)}
      key={app.icon}
      href={app.uri}
    >
      <IconWrapper>
        <Icon
          onClick={() => {
            history.push(app.uri);
          }}
          name={app.icon}
          size={iconSize.m}
          color={
            isLocation(app.uri)
              ? color.darker.BlackRussian
              : color.medium.Manatee
          }
        />
      </IconWrapper>
      {isMobileOnly() && isLocation(app.uri) ? (
        <LabelOverlay linkActive={isLocation(app.uri)}>
          {app.label}
        </LabelOverlay>
      ) : (
        isTabletPortrait() ||
        (isDesktop() && (
          <LabelOverlay linkActive={isLocation(app.uri)}>
            {app.label}
          </LabelOverlay>
        ))
      )}
    </ListItemMenuLink>
  );
};
