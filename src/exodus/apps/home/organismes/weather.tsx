import React from "react";
import styled from "styled-components";
import WeatherImg from "../../../../styles/assets/pics/weather.png";
import { AppContext } from "exodus/context";
import { HomeTitle } from "../globalStyle";
import { rem } from "polished";
import { space, breakPoint, color, font, fontSize } from "styles/const";

export const Weather = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <WeatherWrapper>
      <HomeTitle isDark={isDark}>Météo</HomeTitle>
      <WeatherImgWrapper>
        <TextContent>
          <Planet>MARS</Planet>
          <Text>NUAGEUX</Text>
          <Text>-65</Text>
        </TextContent>
      </WeatherImgWrapper>
    </WeatherWrapper>
  );
};

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakPoint.desktop}) {
    margin-left: ${space.l};
  }
`;

const WeatherImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-image: url(${WeatherImg});
  width: ${rem(343)};
  height: ${rem(175)};
  background-size: cover;
  @media (min-width: ${breakPoint.desktop}) {
    width: ${rem(350)};
    height: ${rem(300)};
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
