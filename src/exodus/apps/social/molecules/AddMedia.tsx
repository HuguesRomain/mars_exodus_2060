import React from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import {
  color,
  space,
  fontSize,
  iconSize,
  fontWeight,
  breakPoint,
} from "styles/const";

const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  display: flex;
  border-radius: 8px;
  background-color: ${color.light.PureWhite};

  @media (min-width: ${breakPoint.desktop}) {
    padding: ${space.xs};
    background-color: ${color.light.WhiteSmoke};
  }
`;

const Description = styled.p`
  color: ${color.medium.Manatee};
  margin-left: ${space.s};
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.avenir.m};
`;

export const AddMedia = () => {
  return (
    <Content>
      <Icon size={iconSize.s} color={color.medium.Manatee} name={"pics"} />
      <Description>Photos/Vidéos</Description>
    </Content>
  );
};
