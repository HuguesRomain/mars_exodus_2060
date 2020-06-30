import React from "react";
import styled from "styled-components";
import WeatherImg from "../../../../styles/assets/pics/weather.png";
import { AppContext } from "exodus/context";
import { HomeTitle } from "../globalStyle";

export const Weather = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <WeatherWrapper>
      <HomeTitle isDark={isDark}>Météo</HomeTitle>
      <WeatherImgContent src={WeatherImg} />
    </WeatherWrapper>
  );
};

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeatherImgContent = styled.img``;
