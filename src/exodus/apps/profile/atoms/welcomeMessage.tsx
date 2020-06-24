import React from "react";
import styled from "styled-components";
import { color, space } from "styles/const";

import { rem } from "polished";

const WelcomeMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 85vw;
    margin: ${space.l} 0 ${space.m} ${space.l};
  }
`;

const Title = styled.h1`
  font-size: 42px;
  margin: 0;
  margin-bottom: ${rem(10)};
  color: ${color.darker.LuckyPoint};
  font-weight: 500;
  font-size: 42px;
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
  font-size: 16px;
`;

export const WelcomeMessage = () => {
  return (
    <WelcomeMessageStyled>
      <Title>Bonjour John !</Title>
      <Text>Prêt pour le départ ?</Text>
    </WelcomeMessageStyled>
  );
};
