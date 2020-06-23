import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import LogoMarsExodus from "../../../../styles/assets/LogoMarsExodus.png";

const IconStyled = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(15)};
  width: ${rem(250)};
`;

const Logo = styled.img`
  width: ${rem(30)};
`;

export const IconMarsExodus = () => {
  return (
    <IconStyled>
      <Logo src={LogoMarsExodus} />
    </IconStyled>
  );
};
