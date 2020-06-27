import React, { useRef } from "react";
import styled from "styled-components";
import { space } from "styles/const";
import { CarouselItem } from "./CarouselItem";
import { CarouselHead } from "../molecules/CarouselHead";
import Slider from "react-slick";

import "./carousel.css";

const CarouselContent = styled.div`
  margin: ${space.l} 0 ${space.xl} ${space.s};

  @media (min-width: 550px) {
    margin: ${space.l} 0 ${space.xl} ${space.l};
  }
`;

export const CarouselInfo = () => {
  const CustomSlider = useRef<HTMLDivElement>(null);

  const next = () => {
    if (CustomSlider.current) {
      // @ts-ignore
      CustomSlider.current.slickNext();
    }
  };

  const previous = () => {
    if (CustomSlider.current) {
      // @ts-ignore
      CustomSlider.current.slickPrev();
    }
  };

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

  return (
    <CarouselContent>
      <CarouselHead previous={previous} next={next} />
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
