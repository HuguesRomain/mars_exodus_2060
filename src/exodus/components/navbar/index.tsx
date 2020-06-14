import React from "react";
import styled from "styled-components";
import { apps } from "./data/index";

import { rem } from "polished";

const WrapperNavigation = styled.div`
  display: flex;
  align-items: center;
`;

const ListItemMenuLink = styled.a`
  color: red;
  padding: 10;
  font-size: ${rem(14)};
`;

const NavBar = () => {
  return (
    <WrapperNavigation>
      {apps.map(({ label, uri }) => {
        return <ListItemMenuLink href={uri}>{label}</ListItemMenuLink>;
      })}
    </WrapperNavigation>
  );
};

export const NavBarContainer = () => {
  return (
    <div>
      <NavBar></NavBar>
    </div>
  );
};
