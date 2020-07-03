import React, { useState, useEffect } from "react";
import { Header } from "./organismes/Header";
import styled from "styled-components";
import { space, breakPoint } from "styles/const";
import { isMobile } from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/context";
import { CarouselInfo, CarouselPlaces } from "./organismes/carousels/carousels";
import { MapComponent } from "./organismes/map";
import { Weather } from "./organismes/weather";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { homeAppRouter } from "exodus/internal-router";
import { Article } from "./article";
import {
  ArticleType,
  getArticles,
  getPlaces,
  PlaceType,
} from "exodus/services/home";
// import { ThemePicker } from "exodus/components/navbar/atoms/themePicker";

const HomeApp = () => {
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [places, setPlaces] = useState<PlaceType[]>([]);
  useEffect((): any => {
    getArticles().then((resp) => setArticles(resp["hydra:member"]));
    getPlaces().then((resp) => setPlaces(resp["hydra:member"]));
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path={homeAppRouter.home()}
          render={() => (
            <>
              {/* <ThemePicker />  Maksym : à positioné dans le header comme sur la maquette */}
              <Header />
              <HomeContent>
                <CarouselInfo articles={articles} />
                <SecondSection>
                  {!isMobile(windowSize) ? (
                    <MapComponent />
                  ) : (
                    <CarouselPlaces places={places} />
                  )}
                  <Weather />
                </SecondSection>
              </HomeContent>
            </>
          )}
        />
        {articles.map((article, i) => {
          return (
            <Route
              exact
              key={i}
              path={homeAppRouter.article(article.id)}
              render={() => <Article article={article} />}
            />
          );
        })}
        {/* {places.map((place, i) => {
          return (
            <Route
              exact
              key={i}
              path={homeAppRouter.place(place.id)}
              render={() => <Article article={place} />}
            />
          );
        })} */}
      </Switch>
    </Router>
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
