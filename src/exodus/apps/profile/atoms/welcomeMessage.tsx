import React from "react";
import styled from "styled-components";
import { color, space, fontSize, breakPoint } from "styles/const";

const WelcomeMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakPoint.tabletLandscape}) {
    width: 85vw;
    margin: ${space.l} 0 ${space.m} ${space.l};
  }
`;

const Title = styled.h1`
  font-size: ${fontSize.xxxl};
  margin: 0;
  margin-bottom: ${space.xs};
  color: ${color.darker.LuckyPoint};
  font-weight: 500;
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
  font-size: ${fontSize.m};
`;

export const WelcomeMessage = () => {
  return (
    <WelcomeMessageStyled>
      <Title>Bonjour John !</Title>
      <Text>Prêt pour le départ ?</Text>
    </WelcomeMessageStyled>
  );
};
