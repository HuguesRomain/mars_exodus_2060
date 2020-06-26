import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { color, iconSize, fontSize, breakPoint, space } from "styles/const";
import { rem } from "polished";
import { isMinTabletPortrait } from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/main";

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
  const Context = React.useContext(AppContext);
  const [isDark, setIsDark] = Context.isDarkContext;

  const [darkMode] = useState<boolean>(isDark);
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemePickerStyled
      onClick={() => {
        setIsDark();
      }}
    >
      <IconWrapper>
        {console.log(Context)}
        <Icon name={!isDark ? "sun" : "moon"} size={iconSize.m} />
      </IconWrapper>
      {isMinTabletPortrait() && <Label>{!isDark ? "Light" : "Dark"}</Label>}
    </ThemePickerStyled>
  );
};
