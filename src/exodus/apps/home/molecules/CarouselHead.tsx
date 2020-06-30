import React, { RefObject } from "react";
import styled from "styled-components";
import { space } from "styles/const";
import { Swipper } from "exodus/components/swipper";
import { AppContext } from "exodus/context";
import { HomeTitle } from "../globalStyle";

export const CarouselHead = ({
  customSlider,
}: {
  customSlider: RefObject<HTMLDivElement>;
}) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <ContentHead>
      <HomeTitle isDark={isDark}>Tout savoir sur l’Exodus</HomeTitle>
      <Swipper customSlider={customSlider} />
    </ContentHead>
  );
};

const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
