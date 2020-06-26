import React from "react";
import styled from "styled-components";
import { color, breakPoint, space, font, fontSize } from "styles/const";
import { TimeRead } from "../atomes/TimeRead";
import { Button } from "../../../components/atoms/button";
import { rem } from "polished";

const ItemContent = styled.div`
  display: flex;
  background-color: ${color.light.PureWhite};
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(153, 155, 168, 0.15);
  width: ${rem(243)};
  height: ${rem(164)};
  padding: 24px;
  margin-right: ${space.m};

  @media (min-width: ${breakPoint.tabletLandscape}) {
    width: 350px;
    height: ${rem(200)};
    padding: ${space.xs};
  }
`;

const TitleArticle = styled.h1`
  margin: 0 ${rem(8)} 0 0;
  font-family: ${font.josefin};
  font-size: ${rem(20)};

  @media (min-width: ${breakPoint.tabletLandscape}) {
    margin: ${rem(20)} ${rem(8)} 0 0;
  }
`;

const DescriptionArticle = styled.p`
  margin: ${space.xs} ${space.xs} ${rem(28)} 0;
  font-size: ${fontSize.s};

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

const Styledutton = styled(Button)`
  padding: 10px;
`;

export const CarouselItem = () => {
  return (
    <ItemContent>
      <ImageArticle
        src="https://i.pinimg.com/originals/20/a8/9a/20a89acdab952dcedc577c06ae10fe1e.jpg"
        alt=""
      />
      <div>
        <TitleArticle>MARS</TitleArticle>
        <TimeRead />
        <DescriptionArticle>
          Tout savoir sur notre nouvelle planète
        </DescriptionArticle>
        <Styledutton style={{ marginRight: space.xs }} iconName={"back"}>
          Lire l'article
        </Styledutton>
      </div>
    </ItemContent>
  );
};
