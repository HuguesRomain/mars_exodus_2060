import React from "react";
import styled from "styled-components";
import { apps } from "./data/index";

import { rem } from "polished";
import { Icon } from "../../../styles/atoms/icons";

const WrapperNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ListItemMenuLink = styled.a<{ linkActive: boolean }>`
  padding: 10;
`;

const NavBarWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 ${rem(20)};
`;

const NavBar = () => {
  return (
    <WrapperNavigation>
      {apps.map(({ label, uri }) => {
        return (
          <>
            <Icon name={"calandar"} color={"red"} size={20} />
            <ListItemMenuLink
              linkActive={window.location.pathname.includes(uri)}
              href={uri}
            >
              {label}
            </ListItemMenuLink>
          </>
        );
      })}
    </WrapperNavigation>
  );
};

export const NavBarContainer = () => {
  return (
    <NavBarWrapper>
      <NavBar></NavBar>
    </NavBarWrapper>
  );
};
