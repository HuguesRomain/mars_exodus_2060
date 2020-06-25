import React from "react";
import styled from "styled-components";
import { color, space } from "styles/const";
import Bobafett from "../../../../styles/assets/pics/bobafett.png";
import Dune from "../../../../styles/assets/pics/dune.png";
import { rem } from "polished";

const AdvertisementStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: ${rem(350)};
  background-color: ${color.light.PureWhite};
  margin: ${rem(36)};
  padding: ${space.s};
  border-radius: 20px;
`;

const Articleimg = styled.img`
  width: ${rem(107)};
  border-radius: 10px;
`;

const Article = styled.div`
  display: flex;
  margin: ${rem(10)} 0 0 0;
`;

const SectionName = styled.p`
  margin: 0 0 ${rem(10)} 0;
  color: ${color.medium.Manatee};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${space.s};
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${color.darker.LuckyPoint};
  margin-bottom: ${rem(2)};
`;

const Link = styled.p`
  font-size: 12px;
  text-decoration: underline;
  margin-bottom: ${rem(5)};
`;

const Description = styled.p`
  color: ${color.medium.Manatee};
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
      {articles.map((article) => (
        <Article>
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
