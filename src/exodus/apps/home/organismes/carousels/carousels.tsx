import React, { useRef } from "react";
import styled from "styled-components";
import { space } from "styles/const";
import { CarouselItem } from "../CarouselItem";
import { CarouselHead } from "../../molecules/CarouselHead";
import Slider from "react-slick";

import "./carousel.css";
import { CarouselPlacesItems } from "../../molecules/itemCarouselPlaces";
import { HomeTitle } from "../../globalStyle";
import { AppContext } from "exodus/context";
import { ArticleType, PlaceType } from "exodus/services/home";

const CarouselContent = styled.div`
  margin-bottom: ${space.l};
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
};

export const CarouselInfo = ({ articles }: { articles: ArticleType[] }) => {
  const CustomSlider = useRef<HTMLDivElement>(null);
  return (
    <CarouselContent>
      <CarouselHead customSlider={CustomSlider} />
      <Slider {...settings} ref={CustomSlider}>
        {articles &&
          articles.map((article: ArticleType, i: number) => {
            return <CarouselItem article={article} key={i} />;
          })}
      </Slider>
    </CarouselContent>
  );
};

export const CarouselPlaces = ({ places }: { places: PlaceType[] }) => {
  const CustomSlider = useRef<HTMLDivElement>(null);

  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <CarouselContent>
      <HomeTitle style={{ marginBottom: space.m }} isDark={isDark}>
        Lieux à visiter
      </HomeTitle>
      <Slider
        className={"slick-slider-places"}
        {...settings}
        ref={CustomSlider}
      >
        {console.log(places)}
        {places.map((place, i) => {
          return <CarouselPlacesItems place={place} />;
        })}
      </Slider>
    </CarouselContent>
  );
};
