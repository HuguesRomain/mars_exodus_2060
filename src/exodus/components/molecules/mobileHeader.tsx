import React, { useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";
import { ThemePicker } from "../navbar/atoms/themePicker";
import {
  color,
  fontSize,
  transitionTime,
  breakPoint,
  space,
} from "styles/const";
import { AppContext } from "exodus/context";

const WrapperHeader = styled.div<{ isDark: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${rem(69)};
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
  border-radius: 0px 0px 20px 20px;
  transition: ${transitionTime};

  @media (min-width: ${breakPoint.mobileOnly}) {
    display: none;
  }
`;

const PopupStyled = styled.div<{ isDark: boolean }>`
  position: fixed;
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
  border-radius: 0.4em;
  transform: translateX(${rem(-60)}) translateY(${rem(15)});
  padding: ${rem(10)};
  z-index: 100000;
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 70%;
    width: 0;
    height: 0;
    border: 1.156em solid transparent;
    border-right-color: ${(props) =>
      !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
    border-top: 0;
    margin-left: -1.156em;
    margin-top: -1.156em;
  }
  transition: ${transitionTime};
`;

const Choise = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(5)};
`;

const Text = styled.p<{ isDark: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.medium.Manatee : color.light.PureWhite};
  font-size: ${fontSize.s};
  margin-left: ${rem(5)};
  transition: ${transitionTime};
`;

const Popup = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <PopupStyled isDark={isDark}>
      <Choise>
        <Icon name={"earth"} size={"32"} />
        <Text isDark={isDark}>Terre</Text>
      </Choise>
      <Choise>
        <Icon name={"mars"} size={"32"} />
        <Text isDark={isDark}>Mars</Text>
      </Choise>
    </PopupStyled>
  );
};

const Hours = styled.p<{ isDark: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.darker.BlackRussian : color.light.PureWhite};

  @media (min-width: ${breakPoint.desktop}) {
    padding-top: ${space.xs};
  }
  transition: ${transitionTime};
`;

export const MobileHeader = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <WrapperHeader isDark={isDark}>
      <ThemePicker />
      <Hours isDark={isDark}>Mercredi 10 Juin 09:48</Hours>
      <div
        onClick={() => {
          displayMenu ? setDisplayMenu(false) : setDisplayMenu(true);
        }}
        onMouseEnter={() => {
          setDisplayMenu(true);
        }}
        onMouseLeave={() => {
          setDisplayMenu(false);
        }}
      >
        <Icon name={"earth"} size={"32"} />
        {displayMenu && <Popup />}
      </div>
    </WrapperHeader>
  );
};
