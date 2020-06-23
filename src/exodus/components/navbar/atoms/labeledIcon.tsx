import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { UriType } from "exodus/internal-router";
import { Icon } from "styles/atoms/icons";
import { AppsTypes } from "../data";
import { color } from "styles/const";
import { LabelOverlay } from "..";
import { isMobileOnly } from "react-device-detect";
import { rem } from "polished";
import { DeviceSize } from "exodus/utils/checkWindowSize";

const ListItemMenuLink = styled.a<{ linkActive?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  opacity: ${(props) => (!props.linkActive ? 0.7 : 1)};
  @media (min-width: 768px) {
    padding: ${rem(15)};
    border-radius: 10px;
    flex-direction: column;
  }

  @media (min-width: 1440px) {
    max-width: ${rem(200)};
  }
`;

const IconWrapper = styled.div`
  padding: ${rem(10)};
  border-radius: 10px;
  @media (min-width: 768px) {
    background: ${color.light.AliceBlue};
  }
`;

export const LabeledIcon = ({ app }: { app: AppsTypes }) => {
  const history = useHistory();
  const isLocation = (uri: UriType) => window.location.pathname.includes(uri);
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
          size={"24"}
          color={
            isLocation(app.uri)
              ? color.darker.BlackRussian
              : color.medium.Manatee
          }
        />
      </IconWrapper>
      {isMobileOnly && isLocation(app.uri) ? (
        <LabelOverlay linkActive={isLocation(app.uri)}>
          {app.label}
        </LabelOverlay>
      ) : (
        DeviceSize.isMinVerticalTablet() && (
          <LabelOverlay linkActive={isLocation(app.uri)}>
            {app.label}
          </LabelOverlay>
        )
      )}
    </ListItemMenuLink>
  );
};
