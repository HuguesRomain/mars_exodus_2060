import React, { useEffect } from "react";
import Rellax from "rellax";
import { Timer } from "../molecules/Timer";
import first from "../../../../styles/assets/pics/hero/hero_1.png";
import second from "../../../../styles/assets/pics/hero/hero_2.png";
import third from "../../../../styles/assets/pics/hero/hero_3.png";
import six from "../../../../styles/assets/pics/hero/hero_6.png";
import back from "../../../../styles/assets/pics/hero/hero_7.jpg";
import styled, { css } from "styled-components";
import {
  font,
  fontSize,
  titeFontsize,
  breakPoint,
  color,
  space,
} from "styles/const";
import { Button } from "exodus/components/atoms/button";
import { authAppRouter } from "exodus/internal-router";
import { rem } from "polished";
import { AppContext } from "exodus/context";
import { Link } from "react-router-dom";

const paramParallax = {
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
};
export const Header = () => {
  useEffect(() => {
    new Rellax(".title", {
      speed: -8,
      paramParallax,
    });
    new Rellax(".button", {
      speed: -7,
      paramParallax,
    });
    new Rellax(".first", {
      speed: -1,
      paramParallax,
    });
    new Rellax(".two", {
      speed: -5,
      paramParallax,
    });
    new Rellax(".three", {
      speed: -7,
      paramParallax,
    });
    new Rellax(".six", {
      speed: -9,
      paramParallax,
    });
    new Rellax(".seven", {
      speed: -9,
      paramParallax,
    });
  }, []);

  const Context = React.useContext(AppContext);
  const [token] = Context.tokenContext;
  return (
    <>
      <ContentHeader>
        <TextContent className="title">
          <Title>MARS EXODUS 2060</Title>
          <Timer />
        </TextContent>
        {!token && (
          <ButtonContainer className="button">
            <Link to={authAppRouter.login()}>
              <Button
                color={color.light.PureWhite}
                iconName={"ticket"}
                styled={ButtonCustom}
              >
                <p style={{ marginLeft: space.xs, fontSize: fontSize.s }}>
                  S’enregistrer
                </p>
              </Button>
            </Link>
          </ButtonContainer>
        )}

        <FistImage className="first" src={first} alt="" />
        <SecondImage className="two" src={second} alt="" />
        <ThirdImage className="three" src={third} alt="" />
        <SixImage className="six" src={six} alt="" />
        <SevenImage className="seven" src={back} alt="" />
      </ContentHeader>
    </>
  );
};

const ButtonContainer = styled.div`
  position: relative;
  z-index: 2000000;
`;

const ButtonCustom = css`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  flex-direction: row-reverse;
  margin-top: ${rem(30)};
  width: ${rem(134)};
  z-index: 2000000;
`;

const ContentHeader = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 644px;
  border-bottom-right-radius: 40px;
  z-index: 20;
  @media (max-width: 1220px) {
    height: 440px;
  }
  @media (max-width: 865px) {
    height: 330px;
  }
`;

const TextContent = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(252, 82, 82, 1) 150%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: ${font.josefin};
  text-align: center;
  font-size: ${titeFontsize.s};
  margin: 0;
  z-index: -1;
  @media (min-width: ${breakPoint.tabletPortrait}) {
    font-size: ${titeFontsize.m};
  }
  @media (min-width: ${breakPoint.desktop}) {
    font-size: ${titeFontsize.l};
  }
`;

const FistImage = styled.img`
  object-fit: cover;
  position: absolute;
  width: 100%;
  bottom: 0;
  @media (max-width: 650px) {
    width: 140%;
    left: -80px;
  }
  @media (max-width: 450px) {
    width: 190%;
    left: -80px;
    bottom: 0;
  }
`;

const SecondImage = styled.img`
  bottom: 0;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  width: 100%;
  @media (max-width: 650px) {
    width: 140%;
    left: -80px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

const ThirdImage = styled.img`
  bottom: 0;
  object-fit: cover;
  z-index: -2;
  position: absolute;
  width: 100%;
  @media (max-width: 650px) {
    width: 140%;
    left: -80px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

const SixImage = styled.img`
  bottom: 0;
  object-fit: cover;
  z-index: -5;
  position: absolute;
  width: 100%;
  @media (max-width: 650px) {
    width: 140%;
    left: -80px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

const SevenImage = styled.img`
  bottom: 0;
  object-fit: cover;
  z-index: -6;
  position: absolute;
  width: 100%;
  @media (max-width: 650px) {
    width: 140%;
    left: -80px;
  }
  @media (max-width: 450px) {
    width: 190%;
    left: -80px;
    bottom: 0;
  }
`;
