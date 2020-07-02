import React from "react";
import styled from "styled-components";
import { color, fontSize, space, breakPoint } from "styles/const";
import { Icon } from "styles/atoms/icons";

const ContentTimeRead = styled.div`
  display: flex;
  align-items: center;
  margin: ${space.xs} ${space.xs} 0 0;
`;

const TimeText = styled.p`
  font-size: ${fontSize.s};
  color: ${color.medium.Manatee};
  padding-left: ${space.xs};

  @media (max-width: ${breakPoint.tabletLandscape}) {
    display: none;
  }
`;

const Time = styled.p`
  font-size: ${fontSize.s};
  color: ${color.medium.Manatee};
  padding-left: ${space.xs};
`;

export const TimeRead = () => {
  return (
    <ContentTimeRead>
      <Icon color={color.medium.Manatee} name={"clock"} size={fontSize.m} />
      <TimeText>Temps de lecture:</TimeText>
      <Time>4min</Time>
    </ContentTimeRead>
  );
};