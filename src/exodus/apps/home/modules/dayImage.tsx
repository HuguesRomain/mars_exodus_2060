import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getDailyImage } from "exodus/services/home";
import { HomeTitle } from "../globalStyle";
import { AppContext } from "exodus/context";
import { rem } from "polished";
import { breakPoint, space, color, fontSize } from "styles/const";

export const DayImage = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const [image, setImage] = useState<any>(null);
  const [isFullScreen, setIsFullscreen] = useState<boolean>(false);
  useEffect(() => {
    getDailyImage().then((resp) => setImage(resp));
  }, []);

  isFullScreen && (document.documentElement.style.overflow = "hidden");
  !isFullScreen && (document.documentElement.style.overflow = "visible");

  return (
    <WeatherWrapper>
      <HomeTitle isDark={isDark}>Image du jour</HomeTitle>
      <WeatherImgWrapper
        onClick={() => {
          setIsFullscreen(true);
        }}
        img={image && image.hdurl}
      >
        <TextContent>
          <Text>{image && image.title}</Text>
        </TextContent>
      </WeatherImgWrapper>
      {isFullScreen && (
        <Box
          onClick={() => {
            setIsFullscreen(false);
          }}
        >
          <Img src={image && image.hdurl} alt="" />
        </Box>
      )}
    </WeatherWrapper>
  );
};

const WeatherWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: ${space.l};
  @media (min-width: ${breakPoint.desktop}) {
    margin-top: 0;
    margin-left: ${space.m};
  }
`;

const WeatherImgWrapper = styled.div<{ img: string | null }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
  border-radius: 10px;
  height: ${rem(175)};
  width: 100%;
  background-size: cover;
  cursor: pointer;
  @media (min-width: ${breakPoint.desktop}) {
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

const Text = styled.p`
  margin-top: ${space.xs};
  color: ${color.light.PureWhite};
  font-size: ${fontSize.m};
`;

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 200000000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  cursor: pointer;
`;

const Img = styled.img`
  max-width: ${rem(450)};
`;
