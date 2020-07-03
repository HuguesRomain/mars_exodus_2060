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
import { TimeRead } from "../atoms/TimeRead";
import { Button } from "../../../components/atoms/button";
import { rem } from "polished";
import { AppContext } from "exodus/context";
import { ArticleType } from "exodus/services/home";
import { Link } from "react-router-dom";
import { homeAppRouter } from "exodus/internal-router";

export const CarouselItem = ({ article }: { article: ArticleType }) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;

  return (
    <Card>
      <ItemContent isDark={isDark}>
        <ImageArticle
          src={`https://symfony-xmt3.frb.io${article.coverImage}`}
          alt="Article Image"
        />
        <div>
          <TitleArticle isDark={isDark}>{article.title}</TitleArticle>
          <TimeRead timeToRead={article.timeToRead} />
          <DescriptionArticle isDark={isDark}>
            {article.intro}
          </DescriptionArticle>
        </div>
      </ItemContent>
      <Link to={homeAppRouter.article(article.id)}>
        <Button
          onClick={() => {
            homeAppRouter.article(article.id);
          }}
          styled={ButtonStyled}
          iconName={"forward"}
        >
          <ButtonText>Lire l'article</ButtonText>
        </Button>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ItemContent = styled.div<{ isDark: boolean }>`
  display: flex;
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(153, 155, 168, 0.15);
  width: ${rem(243)};
  height: ${rem(164)};
  padding: 24px;
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
  margin: 0 0 ${rem(20)} ${rem(-90)};
  @media (max-width: ${breakPoint.tabletLandscape}) {
    width: ${rem(30)};
    margin: 0 0 ${rem(20)} ${rem(-30)};
  }
`;
