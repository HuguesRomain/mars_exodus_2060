import React from "react";
import styled from "styled-components";
import {
  color,
  space,
  fontSize,
  breakPoint,
  transitionTime,
} from "styles/const";
import { AppContext } from "exodus/context";

const WelcomeMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakPoint.tabletLandscape}) {
    width: 85vw;
    margin: ${space.l} 0 ${space.m} ${space.l};
  }
`;

const Title = styled.h1<{ isDark: boolean }>`
  font-size: ${fontSize.xxxl};
  margin: 0;
  margin-bottom: ${space.xs};
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
  font-weight: 500;
  transition: ${transitionTime};
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
  font-size: ${fontSize.m};
`;

export const WelcomeMessage = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <WelcomeMessageStyled>
      <Title isDark={isDark}>Bonjour John !</Title>
      <Text>Prêt pour le départ ?</Text>
    </WelcomeMessageStyled>
  );
};
