import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "exodus/context";
import { HomeTitle } from "../../globalStyle";
import { rem } from "polished";
import { space, breakPoint, color, font, fontSize } from "styles/const";
import { getMarsWeather } from "exodus/services/home";
import Fall from "./assets/fall.jpg";
import Spring from "./assets/spring.jpg";
import Summer from "./assets/summer.jpg";
import Winter from "./assets/winter.jpg";

export const Weather = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    getMarsWeather().then((resp) => setWeather(resp[resp.sol_keys[0]]));
  }, []);

  return (
    <WeatherWrapper>
      <HomeTitle isDark={isDark}>Météo</HomeTitle>
      <WeatherImgWrapper img={weather && weather.Season}>
        <TextContent>
          <Planet>MARS</Planet>
          <Text>{weather && weather.Season}</Text>
          <Text>{weather && weather.AT.av}°F</Text>
        </TextContent>
      </WeatherImgWrapper>
    </WeatherWrapper>
  );
};

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeatherImgWrapper = styled.div<{ img: string }>`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) =>
    props.img === "summer"
      ? `url(${Summer})`
      : props.img === "winter"
      ? `url(${Winter})`
      : props.img === "fall"
      ? `url(${Fall})`
      : `url(${Spring})`};
  border-radius: 10px;
  height: ${rem(175)};
  width: 90%;
  background-size: cover;
  @media (min-width: ${breakPoint.desktop}) {
    height: ${rem(300)};
    width: ${rem(350)};
  }
`;

const TextContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 ${space.m} ${space.m};
`;

const Planet = styled.p`
  color: ${color.light.PureWhite};
  font-family: ${font.josefin};
  font-size: ${fontSize.l};
`;

const Text = styled.p`
  margin-top: ${space.xs};
  color: ${color.light.PureWhite};
  font-size: ${fontSize.m};
`;
