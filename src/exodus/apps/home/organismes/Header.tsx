import React, { useEffect } from "react";
import Rellax from "rellax";
import { Timer } from "../molecules/Timer";
import first from "../../../../assets/images/hero_1.png";
import second from "../../../../assets/images/hero_2.png";
import third from "../../../../assets/images/hero_3.png";
import six from "../../../../assets/images/hero_6.png";
import back from "../../../../assets/images/hero_7.jpg";
import styled from "styled-components";
import { font, titeFontsize, breakPoint } from "styles/const";

export const Header = () => {
  useEffect(() => {
    new Rellax(".title", {
      speed: -8,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".first", {
      speed: -1,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".two", {
      speed: -5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".three", {
      speed: -7,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".six", {
      speed: -9,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".seven", {
      speed: -9,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);
  return (
    <ContentHeader>
      <TextContent className="title">
        <Title>MARS EXODUS 2060</Title>
        <Timer />
      </TextContent>
      <FistImage className="first" src={first} alt="" />
      <SecondImage className="two" src={second} alt="" />
      <ThirdImage className="three" src={third} alt="" />
      <SixImage className="six" src={six} alt="" />
      <SevenImage className="seven" src={back} alt="" />
    </ContentHeader>
  );
};

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  height: 100%;
  align-items: center;
  z-index: 10;
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
  z-index: 0;
  width: 100%;
  bottom: 0;
  @media (max-width: 650px) {
    width: 140%;
    left: -80px;
  }
  @media (max-width: 450px) {
    width: 190%;
    left: -80px;
    bottom: -20px;
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
    width: 190%;
    left: -80px;
    bottom: -20px;
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
    width: 190%;
    left: -80px;
    bottom: -20px;
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
    width: 190%;
    left: -80px;
    bottom: -20px;
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
    bottom: -20px;
  }
`;
