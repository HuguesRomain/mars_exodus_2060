import React, { useEffect } from "react";
import Rellax from "rellax";
import { Timer } from "../molecules/Timer";
import first from "../../../../assets/images/hero-1.png";
import second from "../../../../assets/images/hero-2.png";
import third from "../../../../assets/images/hero-3.png";
/* import fourth from "../../../../assets/images/hero-4.png";
import five from "../../../../assets/images/hero-5.png"; */
import six from "../../../../assets/images/hero-6.png";
import back from "../../../../assets/images/hero-7.jpg";
import styled from "styled-components";
import { font, titeFontsize, breakPoint } from "styles/const";

const ContentHeader = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 644px;
  border-bottom-right-radius: 40px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  height: 100%;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${font.josefin};
  text-align: center;
  font-size: ${titeFontsize.m};
  margin: 0;
  z-index: -1;
  @media (min-width: ${breakPoint.mobileOnly}) {
    font-size: ${titeFontsize.l};
  }
`;

const FistImage = styled.img`
  object-fit: cover;
  height: 644px;
  position: absolute;
  z-index: 2;
  width: 100%;
  bottom: 0;
`;
/* const SecondImage = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
`; */
const PlanetBack = styled.img`
  object-fit: cover;
  height: 644px;
  z-index: -1;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const FirstMontaine = styled.img`
  object-fit: cover;
  height: 644px;
  z-index: 1;
  position: absolute;
  width: 100%;
  margin-top: 120px;
`;

const Back = styled.img`
  object-fit: cover;
  height: 644px;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: -2;
`;

export const Header = () => {
  useEffect(() => {
    new Rellax(".dune", {
      speed: -9,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".animate", {
      speed: -8,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".title", {
      speed: -9,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".pic", {
      speed: -9,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".montaine", {
      speed: -5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    /* new Rellax(".largeMontaine", {
      speed: -20,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    }); */
    new Rellax(".planet", {
      speed: -8,
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
      <FistImage src={first} alt="" />
      <FirstMontaine className="dune" src={second} alt="" />
      <FirstMontaine className="pic" src={third} alt="" />
      {/* <SecondImage className="animate" src={fourth} alt="" /> */}
      {/* <SecondImage className="largeMontaine" src={five} alt="" /> */}
      <PlanetBack className="planet" src={six} alt="" />
      <Back className="animate" src={back} alt="" />
    </ContentHeader>
  );
};
