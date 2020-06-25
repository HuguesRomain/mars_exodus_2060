import React from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { rem } from "polished";
import { color } from "styles/const";

const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  display: flex;
  border-radius: 8px;
  background-color: ${color.light.PureWhite};

  @media (min-width: 1440px) {
    padding: ${rem(10)};
    background-color: ${color.light.WhiteSmoke};
  }
`;

const Description = styled.p`
  color: ${color.medium.Manatee};
  margin-left: ${rem(5)};
`;

export const AddMedia = () => {
  return (
    <Content>
      <Icon color={color.medium.Manatee} name={"pics"} />
      <Description>Photos/Vidéos</Description>
    </Content>
  );
};
