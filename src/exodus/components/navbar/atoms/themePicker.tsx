import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import {
  color,
  iconSize,
  fontSize,
  breakPoint,
  space,
  isDarkStorage,
} from "styles/const";
import { rem } from "polished";
import { isMinTabletPortrait } from "exodus/utils/checkWindowSize";

const Label = styled.p`
  font-size: ${fontSize.s};
  color: ${color.medium.Manatee};
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
  const [darkMode, setDarkMode] = useState<boolean>(isDarkStorage());
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemePickerStyled
      onClick={() => {
        setDarkMode((prevState) => !prevState);
      }}
    >
      <IconWrapper>
        <Icon name={darkMode ? "sun" : "moon"} size={iconSize.m} />
      </IconWrapper>
      {isMinTabletPortrait() && <Label>{darkMode ? "Light" : "Dark"}</Label>}
    </ThemePickerStyled>
  );
};
