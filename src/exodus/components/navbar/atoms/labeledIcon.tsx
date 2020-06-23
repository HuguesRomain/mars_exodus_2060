import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { UriType } from "exodus/internal-router";
import { Icon } from "styles/atoms/icons";
import { AppsTypes } from "../data";
import { color } from "styles/const";
import { LabelOverlay } from "..";
import { isBrowser, isMobileOnly } from "react-device-detect";
import { rem } from "polished";

const ListItemMenuLink = styled.a<{ isLocation?: boolean }>`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    padding: ${rem(15)};
    background: ${(props) => props.isLocation && "#F8F8F8"};
    border-radius: 10px;
  }

  @media (min-width: 1440px) {
    max-width: ${rem(200)};
  }
`;

export const LabeledIcon = ({ app }: { app: AppsTypes }) => {
  // const [earthOrMars, setEarthOrMars] = useState("earth");
  const history = useHistory();
  const isLocation = (uri: UriType) => window.location.pathname.includes(uri);
  return (
    <ListItemMenuLink
      isLocation={isLocation(app.uri)}
      key={app.icon}
      href={app.uri}
    >
      <Icon
        onClick={() => {
          history.push(app.uri);
        }}
        name={app.icon}
        size={"24"}
        color={
          isLocation(app.uri)
            ? color.darker.BlackRussian
            : color.medium.LinkWater
        }
      />
      {isMobileOnly && isLocation(app.uri) ? (
        <LabelOverlay linkActive={isLocation(app.uri)}>
          {app.label}
        </LabelOverlay>
      ) : (
        isBrowser && (
          <LabelOverlay linkActive={isLocation(app.uri)}>
            {app.label}
          </LabelOverlay>
        )
      )}
    </ListItemMenuLink>
  );
};
