import React from "react";
import styled from "styled-components";
import { color, space, fontSize, fontWeight } from "styles/const";
import Bobafett from "../../../../styles/assets/pics/bobafett.png";
import Dune from "../../../../styles/assets/pics/dune.png";
import { rem } from "polished";

const AdvertisementStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: ${rem(350)};
  background-color: ${color.light.PureWhite};
  margin-top: ${space.l};
  padding: ${space.s};
  border-radius: 20px;
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

const Title = styled.p`
  font-weight: ${fontWeight.avenir.l};
  font-size: ${fontSize.s};
  color: ${color.darker.LuckyPoint};
  margin-bottom: ${rem(2)};
`;

const Link = styled.p`
  font-size: ${fontSize.xs};
  text-decoration: underline;
  margin-bottom: ${rem(2)};
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
  return (
    <AdvertisementStyled>
      <SectionName>Sponsorisés</SectionName>
      {articles.map((article, i) => (
        <Article key={i}>
          <Articleimg src={article.img} alt="Image article" />
          <Content>
            <Title>{article.title}</Title>
            <Link>{article.url}</Link>
            <Description>{article.description}</Description>
          </Content>
        </Article>
      ))}
    </AdvertisementStyled>
  );
};
