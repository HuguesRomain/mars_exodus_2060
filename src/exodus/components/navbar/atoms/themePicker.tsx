import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import {
  color,
  iconSize,
  fontSize,
  breakPoint,
  space,
  transitionTime,
} from "styles/const";
import { rem } from "polished";
import { isMinTabletPortrait } from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/context";

const Label = styled.p<{ isDark: boolean }>`
  font-size: ${fontSize.s};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackRussian : color.light.PureWhite};
  transition: ${transitionTime};
`;

const ThemePickerStyled = styled.a<{ isLocation?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  @media (min-width: ${breakPoint.tabletPortrait}) {
    padding: ${space.s};
    background: ${(props) => props.isLocation && "#F8F8F8"};
    border-radius: 10px;
  }

  @media (min-width: ${breakPoint.desktop}) {
    max-width: ${rem(200)};
  }
`;
const IconWrapper = styled.div`
  @media (min-width: ${breakPoint.tabletPortrait}) {
    padding: ${space.xs};
  }
`;

export const ThemePicker = () => {
  const Context = React.useContext(AppContext);
  const [isDark, setIsDark] = Context.isDarkContext;
  const [windowSize] = Context.windowSizeContext;

  const [darkMode, setDarkMode] = useState<boolean>(isDark);
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemePickerStyled
      onClick={() => {
        setDarkMode((prevState) => !prevState);
        setIsDark();
      }}
    >
      <IconWrapper>
        <Icon
          color={isDark ? color.light.PureWhite : color.darker.LuckyPoint}
          name={!isDark ? "sun" : "moon"}
          size={iconSize.m}
        />
      </IconWrapper>
      {isMinTabletPortrait(windowSize) && (
        <Label isDark={isDark}>{!isDark ? "Light" : "Dark"}</Label>
      )}
    </ThemePickerStyled>
  );
};
