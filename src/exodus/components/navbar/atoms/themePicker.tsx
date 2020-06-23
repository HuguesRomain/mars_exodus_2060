import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { color } from "styles/const";
import { rem } from "polished";

const ThemePickerStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.p`
  font-size: 14px;
  color: ${color.medium.LinkWater};
  margin-left: ${rem(10)};
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
          <Icon name={"sun"} />
          <Label>Light theme</Label>
        </>
      ) : (
        <>
          <Icon name={"moon"} />
          <Label>Dark theme</Label>
        </>
      )}
    </ThemePickerStyled>
  );
};
