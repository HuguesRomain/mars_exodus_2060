import React from "react";
import styled from "styled-components";
import { font, fontSize, space, fontWeight } from "styles/const";
import { CarouselItem } from "./CarouselItem";

const CarouselContent = styled.div`
  margin: ${space.l} 0 ${space.xl} ${space.l};
`;

const CarouselTitel = styled.p`
  font-family: ${font.avenir};
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.avenir.m};
  margin-bottom: ${space.m};
`;

const AllArticle = styled.div`
  display: flex;
`;

export const CarouselInfo = () => {
  return (
    <CarouselContent>
      <CarouselTitel>Tout savoir sur l’Exodus</CarouselTitel>
      <AllArticle>
        <CarouselItem />
      </AllArticle>
    </CarouselContent>
  );
};
