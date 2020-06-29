import React, { RefObject } from "react";
import styled from "styled-components";
import { fontWeight, space, font, fontSize } from "styles/const";
import { Swipper } from "exodus/components/swipper";

export const CarouselHead = ({
  customSlider,
}: {
  customSlider: RefObject<HTMLDivElement>;
}) => {
  return (
    <ContentHead>
      <CarouselTitel>Tout savoir sur l’Exodus</CarouselTitel>
      <Swipper customSlider={customSlider} />
    </ContentHead>
  );
};

const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${space.m};
`;

const CarouselTitel = styled.p`
  font-family: ${font.avenir};
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.avenir.m};
`;
