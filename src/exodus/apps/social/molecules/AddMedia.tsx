import React from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import {
  color,
  space,
  fontSize,
  iconSize,
  fontWeight,
  transitionTime,
} from "styles/const";
import { AppContext } from "exodus/context";

export const AddMedia = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <Content isDark={isDark}>
      <Icon size={iconSize.s} color={color.medium.Manatee} name={"pics"} />
      <Description>Photos</Description>
    </Content>
  );
};

const Content = styled.div<{ isDark: boolean }>`
  display: flex;
  align-items: center;
  max-width: 500px;
  display: flex;
  border-radius: 8px;
  padding: ${space.xs};
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.BlackPearl};
  transition: ${transitionTime};
  &:hover {
    box-shadow: 0 0 12px 2px rgba(153, 155, 168, 0.25);
  }
`;

const Description = styled.p`
  color: ${color.medium.Manatee};
  margin-left: ${space.s};
  font-size: ${fontSize.xs};
  font-weight: ${fontWeight.avenir.m};
`;
