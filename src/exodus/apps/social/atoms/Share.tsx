import React from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { color, fontSize, iconSize, space } from "styles/const";

const Item = styled.div`
  display: flex;
  margin-right: auto;
  align-items: center;
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
  margin-left: ${space.xs};
  font-size: ${fontSize.s};
`;

export const Share = () => {
  return (
    <Item>
      <Icon size={iconSize.m} color={color.medium.Manatee} name={"share"} />
      <Text>Partager</Text>
    </Item>
  );
};
