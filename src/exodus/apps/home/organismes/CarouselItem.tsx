import React from "react";
import styled, { css } from "styled-components";
import {
  color,
  breakPoint,
  space,
  font,
  fontSize,
  transitionTime,
} from "styles/const";
import { TimeRead } from "../atomes/TimeRead";
import { Button } from "../../../components/atoms/button";
import { rem } from "polished";
import { AppContext } from "exodus/context";

const ItemContent = styled.div<{ isDark: boolean }>`
  display: flex;
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(153, 155, 168, 0.15);
  width: ${rem(243)};
  height: ${rem(164)};
  padding: 24px;
  margin-right: ${space.m};
  transition: ${transitionTime};
  @media (min-width: ${breakPoint.tabletLandscape}) {
    width: 350px;
    height: ${rem(200)};
    padding: ${space.xs};
  }
`;

const TitleArticle = styled.h1<{ isDark: boolean }>`
  margin: 0 ${rem(8)} 0 0;
  font-family: ${font.josefin};
  font-size: ${rem(20)};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  transition: ${transitionTime};
  @media (min-width: ${breakPoint.tabletLandscape}) {
    margin: ${rem(20)} ${rem(8)} 0 0;
  }
`;

const DescriptionArticle = styled.p<{ isDark: boolean }>`
  margin: ${space.xs} ${space.xs} ${rem(28)} 0;
  font-size: ${fontSize.s};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  transition: ${transitionTime};
  line-height: 20px;
  @media (max-width: ${breakPoint.tabletLandscape}) {
    margin: ${rem(11)} ${space.xs} 0 0;
    width: 195px;
    transform: translate(-65px, 0);
  }
`;

const ImageArticle = styled.img`
  border-radius: 50%;
  margin-right: ${rem(16)};
  object-fit: cover;
  height: ${rem(48)};
  width: ${rem(48)};

  @media (min-width: ${breakPoint.tabletLandscape}) {
    border-radius: 10px;
    height: ${rem(184)};
    width: ${rem(125)};
  }
`;

const ButtonText = styled.span`
  margin-right: ${space.xs};
  font-size: ${fontSize.s};
  @media (max-width: ${breakPoint.tabletLandscape}) {
    display: none;
  }
`;

const ButtonStyled = css`
  position: absolute;
  margin-left: ${rem(110)};
  margin-right: ${space.s};
  @media (max-width: ${breakPoint.tabletLandscape}) {
    margin-left: ${rem(130)};
  }
`;

export const CarouselItem = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <ItemContent isDark={isDark}>
      <ImageArticle
        src="https://i.pinimg.com/originals/20/a8/9a/20a89acdab952dcedc577c06ae10fe1e.jpg"
        alt="Article Image"
      />
      <div>
        <TitleArticle isDark={isDark}>MARS</TitleArticle>
        <TimeRead />
        <DescriptionArticle isDark={isDark}>
          Tout savoir sur notre nouvelle planète
        </DescriptionArticle>
        <Button styled={ButtonStyled} iconName={"forward"}>
          <ButtonText>Lire l'article</ButtonText>
        </Button>
      </div>
    </ItemContent>
  );
};
