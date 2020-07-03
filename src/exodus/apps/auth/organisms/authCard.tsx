import React from "react";
import styled from "styled-components";
import { rem } from "polished";

import HeaderImg from "../../../../styles/assets/pics/hero/hero_7.jpg";
import { breakPoint, color } from "styles/const";
import { AppContext } from "exodus/context";

const CardAuthStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${rem(531)};

  @media (min-width: ${breakPoint.tabletPortrait}) {
    width: ${rem(531)};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: bottom;
  background-image: url(${HeaderImg});
  min-height: ${rem(120)};
  background-size: 100%;
  border-radius: 20px 20px 0px 0px;
  font-size: 20px;
  color: white;
`;

const CardContent = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
  border-radius: 0px 0px 20px 20px;
  padding: ${rem(20)} 0;
  max-height: ${rem(530)};
  @media (min-width: ${breakPoint.tabletPortrait}) {
    min-height: ${rem(530)};
    max-height: none;
  }
`;

export const CardAuth = ({ children }: { children: JSX.Element }) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <CardAuthStyled>
      <Header>
        <h2>#MARS EXODUS 2060</h2>
      </Header>
      <CardContent isDark={isDark}>{children}</CardContent>
    </CardAuthStyled>
  );
};
