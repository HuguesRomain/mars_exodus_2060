import React from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { color } from "styles/const";
import { rem } from "polished";
import { isTablet } from "react-device-detect";

const IconStyled = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(15)};
  width: ${rem(250)};
`;

const Text = styled.p`
  color: ${color.darker.LuckyPoint};
  margin-left: ${rem(10)};
`;

export const IconMarsExodus = () => {
  return (
    <IconStyled>
      <Icon name={"logo"} />
      {!isTablet && <Text>Mars Exodus 2060</Text>}
    </IconStyled>
  );
};
