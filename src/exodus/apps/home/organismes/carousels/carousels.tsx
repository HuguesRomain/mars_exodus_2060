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

export const CarouselInfo = () => {
  const CustomSlider = useRef<HTMLDivElement>(null);
  return (
    <CarouselContent>
      <CarouselHead customSlider={CustomSlider} />
      <Slider {...settings} ref={CustomSlider}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Slider>
    </CarouselContent>
  );
};

export const CarouselPlaces = () => {
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
        <CarouselPlacesItems />
        <CarouselPlacesItems />
        <CarouselPlacesItems />
        <CarouselPlacesItems />
        <CarouselPlacesItems />
        <CarouselPlacesItems />
      </Slider>
    </CarouselContent>
  );
};
