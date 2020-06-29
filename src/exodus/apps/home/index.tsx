import React from "react";
import { Header } from "./organismes/Header";
import styled from "styled-components";
import { CarouselInfo } from "./organismes/CarouselInfo";

const HomeContent = styled.main`
  height: 200vh;
  overflow: hidden;
`;

const HomeApp = () => {
  return (
    <HomeContent>
      <Header />
      <CarouselInfo />
    </HomeContent>
  );
};

export default HomeApp;
