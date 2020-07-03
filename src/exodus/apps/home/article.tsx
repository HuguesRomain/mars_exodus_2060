import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  ArticleType,
  getArticlesSection,
  SectionType,
} from "exodus/services/home";
import CoverImage from "../../../assets/images/hero_7.jpg";
import { space, color, transitionTime, font, fontSize } from "styles/const";
import { AppContext } from "exodus/context";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";

export const Article = ({ article }: { article: ArticleType }) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const [sections, setSections] = useState<SectionType[]>([]);
  useEffect(() => {
    getArticlesSection(article.id).then((resp) => {
      console.log(resp);
      setSections(resp["hydra:member"]);
    });
  }, [article.id]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {console.log(sections)}
      <Header />
      <Icon name={"backarrow"} />
      <Sections>
        {sections.map((section) => {
          return (
            <>
              <Title>
                <TitleText isDark={isDark}>{section.title}</TitleText>
                <TitleDecoration />
              </Title>
              {section.text.map((text) => {
                return <Text isDark={isDark}>{text}</Text>;
              })}
            </>
          );
        })}
      </Sections>
    </div>
  );
};

const Sections = styled.div`
  margin: ${space.l} 0 0 ${space.s};
  width: 50%;
  @media (max-width: 550px) {
    margin: 0;
    padding: ${space.l} ${space.xs};
    width: 100%;
  }
`;

const Text = styled.p<{ isDark: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.medium.Manatee : color.light.PureWhite};
  margin: ${space.s} 0;
  line-height: 30px;
  font-size: ${fontSize.m};
  transition: ${transitionTime};
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleDecoration = styled.span`
  margin-top: ${space.xs};
  width: ${rem(40)};
  height: ${rem(5)};
  background-color: ${color.SunsetOrange};
`;

const TitleText = styled.h2<{ isDark: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  transition: ${transitionTime};
  font-family: ${font.josefin};
  font-size: ${fontSize.xl};
`;

const Header = styled.div`
  background-image: url(${CoverImage});
  background-size: cover;
  width: 100%;
  height: 60vh;
  border-radius: 0 0 20px 0;
`;
