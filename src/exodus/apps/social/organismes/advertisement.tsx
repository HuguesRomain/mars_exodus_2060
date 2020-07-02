import React from "react";
import styled from "styled-components";
import {
  color,
  space,
  fontSize,
  fontWeight,
  transitionTime,
  breakPoint,
} from "styles/const";
import Bobafett from "../../../../styles/assets/pics/bobafett.png";
import Dune from "../../../../styles/assets/pics/dune.png";
import { rem } from "polished";
import { AppContext } from "exodus/context";

const AdvertisementStyled = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${rem(350)};
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
  margin-top: ${space.l};
  padding: ${space.s};
  border-radius: 20px;
  transition: ${transitionTime};

  @media (max-width: ${breakPoint.tabletLandscape}) {
    display: none;
  }
`;

const Articleimg = styled.img`
  width: ${rem(107)};
  border-radius: 10px;
`;

const Article = styled.div`
  display: flex;
  margin: ${space.m} 0 0 0;
`;

const SectionName = styled.p`
  color: ${color.medium.Manatee};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${space.s};
`;

const Title = styled.p<{ isDark: boolean }>`
  font-weight: ${fontWeight.avenir.l};
  font-size: ${fontSize.s};
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
  margin-bottom: ${rem(2)};
  transition: ${transitionTime};
`;

const Link = styled.p<{ isDark: boolean }>`
  font-size: ${fontSize.xs};
  text-decoration: underline;
  margin-bottom: ${rem(2)};
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
  transition: ${transitionTime};
`;

const Description = styled.p`
  font-size: ${fontSize.s};
  color: ${color.medium.Manatee};
  line-height: 20px;
`;

type ArticleType = {
  img: string;
  title: string;
  url: string;
  description: string;
};

const articles: ArticleType[] = [
  {
    img: Bobafett,
    title: "Devenez Chasseur d’Alien",
    url: "welcometothegalaxy.mar",
    description:
      "Apprenez les clés du métier, constituez votre réseau et décrochez un job sur Welcome to the Galaxy !",
  },
  {
    img: Dune,
    title: "Résidences Planitia Real Estate",
    url: "planitiarealeastate.mar",
    description:
      "Découvrez nos résidences modernes avec vue sur les pyramides d’Elysium.",
  },
];

export const Advertisement = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <AdvertisementStyled isDark={isDark}>
      <SectionName>Sponsorisés</SectionName>
      {articles.map((article, i) => (
        <Article key={i}>
          <Articleimg src={article.img} alt="Image article" />
          <Content>
            <Title isDark={isDark}>{article.title}</Title>
            <Link isDark={isDark}>{article.url}</Link>
            <Description>{article.description}</Description>
          </Content>
        </Article>
      ))}
    </AdvertisementStyled>
  );
};
