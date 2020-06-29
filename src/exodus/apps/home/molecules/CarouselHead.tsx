import React, { RefObject } from "react";
import styled from "styled-components";
import {
  fontWeight,
  space,
  font,
  fontSize,
  color,
  transitionTime,
} from "styles/const";
import { Swipper } from "exodus/components/swipper";
import { AppContext } from "exodus/context";

export const CarouselHead = ({
  customSlider,
}: {
  customSlider: RefObject<HTMLDivElement>;
}) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <ContentHead>
      <CarouselTitel isDark={isDark}>Tout savoir sur l’Exodus</CarouselTitel>
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

const CarouselTitel = styled.p<{ isDark: boolean }>`
  font-family: ${font.avenir};
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.avenir.m};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  transition: ${transitionTime};
`;
