import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import HeaderImg from "../../../../styles/assets/mobile/header.png";

const CardAuthStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  width: ${rem(335)};
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${HeaderImg});
  min-height: ${rem(120)};
  background-size: 100%;
  border-radius: 20px 20px 0px 0px;
  font-size: 20px;
  color: white;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0px 0px 20px 20px;
  padding-bottom: ${rem(50)};
  height: ${rem(484)};
`;

export const CardAuth = ({ children }: { children: JSX.Element }) => {
  return (
    <CardAuthStyled>
      <Header>
        <h2>#MARS EXODUS 2060</h2>
      </Header>
      <CardContent>{children}</CardContent>
    </CardAuthStyled>
  );
};
