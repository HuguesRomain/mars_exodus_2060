import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { color, iconSize } from "styles/const";
import { rem } from "polished";
import { DeviceSize } from "exodus/utils/checkWindowSize";

const Label = styled.p`
  font-size: 14px;
  color: ${color.medium.Manatee};
`;

const ThemePickerStyled = styled.a<{ isLocation?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: ${rem(15)};
    background: ${(props) => props.isLocation && "#F8F8F8"};
    border-radius: 10px;
  }

  @media (min-width: 1440px) {
    max-width: ${rem(200)};
  }
`;
const IconWrapper = styled.div`
  @media (min-width: 768px) {
    padding: ${rem(10)};
  }
`;

export const ThemePicker = () => {
  const [isLight, setIsLight] = useState<boolean>(true);
  return (
    <ThemePickerStyled
      onClick={() => {
        isLight ? setIsLight(false) : setIsLight(true);
      }}
    >
      {isLight ? (
        <>
          <IconWrapper>
            <Icon name={"sun"} size={iconSize.m} />
          </IconWrapper>
          {DeviceSize.isMinVerticalTablet() && <Label>Light</Label>}
        </>
      ) : (
        <>
          <IconWrapper>
            <Icon name={"moon"} size={iconSize.m} />
          </IconWrapper>
          {DeviceSize.isMinVerticalTablet() && <Label>Dark</Label>}
        </>
      )}
    </ThemePickerStyled>
  );
};
