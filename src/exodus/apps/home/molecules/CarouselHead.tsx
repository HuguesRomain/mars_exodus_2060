import React, { RefObject } from "react";
import styled from "styled-components";
import { Swipper } from "exodus/components/atoms/swipper";
import { AppContext } from "exodus/context";
import { HomeTitle } from "../globalStyle";

type Props = {
  customSlider: RefObject<HTMLDivElement>;
};

export const CarouselHead = ({ customSlider }: Props) => {
  const next = () => {
    if (customSlider.current) {
      // @ts-ignore
      customSlider.current.slickNext();
    }
  };

  const previous = () => {
    if (customSlider.current) {
      // @ts-ignore
      customSlider.current.slickPrev();
    }
  };

  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <ContentHead>
      <HomeTitle isDark={isDark}>Tout savoir sur l’Exodus</HomeTitle>
      <Swipper LeftArrow={previous} RigthArrow={next} />
    </ContentHead>
  );
};

const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
