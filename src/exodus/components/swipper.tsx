import React, { RefObject } from "react";
import styled from "styled-components";
import { space, fontSize, color, breakPoint } from "styles/const";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";

const next = (customSlider: RefObject<HTMLDivElement>) => {
  if (customSlider.current) {
    // @ts-ignore
    customSlider.current.slickNext();
  }
};

const previous = (customSlider: RefObject<HTMLDivElement>) => {
  if (customSlider.current) {
    // @ts-ignore
    customSlider.current.slickPrev();
  }
};

export const Swipper = ({
  customSlider,
}: {
  customSlider: RefObject<HTMLDivElement>;
}) => {
  return (
    <ButtonContent>
      <ButtonCarousel
        onClick={() => {
          previous(customSlider);
        }}
      >
        <Icon
          name={"back"}
          size={fontSize.m}
          strokeColor={color.light.PureWhite}
        />
      </ButtonCarousel>
      <ButtonCarousel
        onClick={() => {
          next(customSlider);
        }}
      >
        <Icon
          name={"forward"}
          size={fontSize.m}
          strokeColor={color.light.PureWhite}
        />
      </ButtonCarousel>
    </ButtonContent>
  );
};

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
  margin-bottom: ${space.m};
  @media (max-width: ${breakPoint.mobileOnly}) {
    display: none;
  }
`;
