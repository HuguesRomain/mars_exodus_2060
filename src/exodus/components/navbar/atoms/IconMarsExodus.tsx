import React from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { rem } from "polished";

const IconStyled = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(15)};
  width: ${rem(250)};
`;

export const IconMarsExodus = () => {
  return (
    <IconStyled>
      <Icon name={"logo"} />
    </IconStyled>
  );
};
