import React from "react";
import { Header } from "./organismes/Header";
import styled from "styled-components";
import { space, breakPoint } from "styles/const";
import { isMobile } from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/context";
import { CarouselInfo, CarouselPlaces } from "./organismes/carousels/carousels";
import { MapComponent } from "./organismes/map";
import { Weather } from "./organismes/weather";

const HomeApp = () => {
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;
  return (
    <>
      <Header />
      <HomeContent>
        <CarouselInfo />
        <SecondSection>
          {!isMobile(windowSize) ? <MapComponent /> : <CarouselPlaces />}
          <Weather />
        </SecondSection>
      </HomeContent>
    </>
  );
};

const HomeContent = styled.main`
  overflow: hidden;
  margin: ${space.l} 0 0 ${space.s};

  @media (min-width: 550px) {
    margin: ${space.l} 0 0 ${space.l};
  }
`;

const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-right: ${space.l};
  margin-bottom: ${space.m};
  @media (min-width: ${breakPoint.desktop}) {
    flex-direction: row;
  }
`;

export default HomeApp;
