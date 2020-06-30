import React from "react";
import styled from "styled-components";
import { space, fontSize, color, breakPoint } from "styles/const";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";

type Props = {
  LeftArrow?: () => void;
  RigthArrow?: () => void;
};

export const Swipper = ({ LeftArrow, RigthArrow }: Props) => {
  return (
    <ButtonContent>
      <ButtonCarousel onClick={LeftArrow}>
        <Icon
          name={"back"}
          size={fontSize.m}
          strokeColor={color.light.PureWhite}
        />
      </ButtonCarousel>
      <ButtonCarousel onClick={RigthArrow}>
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
