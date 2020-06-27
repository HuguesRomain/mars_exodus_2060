import React from "react";
import styled from "styled-components";
import {
  fontWeight,
  space,
  font,
  fontSize,
  color,
  breakPoint,
} from "styles/const";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";

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

const ButtonCarousel = styled.button`
  background-color: transparent;
  border: none;
  background-color: ${color.SunsetOrange};
  border-radius: ${rem(50)};
  padding: ${rem(12)} ${rem(11)} ${rem(8)} ${rem(11)};
  &:focus {
    outline: 0;
  }
  &:first-child {
    border-radius: ${rem(50)} 0 0 ${rem(50)};
  }
  &:last-child {
    border-radius: 0 ${rem(50)} ${rem(50)} 0;
    margin-right: ${space.m};
  }
`;

const ButtonContent = styled.div`
  @media (max-width: ${breakPoint.mobileOnly}) {
    display: none;
  }
`;

type Props = {
  previous: () => void;
  next: () => void;
};

export const CarouselHead = ({ previous, next }: Props) => {
  return (
    <ContentHead>
      <CarouselTitel>Tout savoir sur l’Exodus</CarouselTitel>
      <ButtonContent>
        <ButtonCarousel onClick={previous}>
          <Icon
            name={"back"}
            size={fontSize.m}
            strokeColor={color.light.PureWhite}
          />
        </ButtonCarousel>
        <ButtonCarousel onClick={next}>
          <Icon
            name={"forward"}
            size={fontSize.m}
            strokeColor={color.light.PureWhite}
          />
        </ButtonCarousel>
      </ButtonContent>
    </ContentHead>
  );
};
