import React from "react";
import styled from "styled-components";
import { apps } from "./data/index";

import { rem } from "polished";
import { Icon } from "../../../styles/atoms/icons";

import { useHistory } from "react-router-dom";

const WrapperNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ListItemMenuLink = styled.a`
  display: flex;
  align-items: center;
  padding: 10;
`;

const Label = styled.p<{ linkActive: boolean }>`
  padding-left: ${rem(5)};
`;

const NavBarWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: ${rem(15)} ${rem(20)};
  background-color: white;
  border-radius: 20px 20px 0px 0px;
`;

const NavBar = () => {
  const history = useHistory();
  return (
    <WrapperNavigation>
      {apps.map(({ label, uri, icon }) => {
        return (
          <ListItemMenuLink href={uri}>
            <Icon
              onClick={() => {
                history.push(uri);
              }}
              name={icon}
              size={24}
            />
            {window.location.pathname.includes(uri) && (
              <Label linkActive={window.location.pathname.includes(uri)}>
                {label}
              </Label>
            )}
          </ListItemMenuLink>
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
