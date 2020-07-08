import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  ArticleType,
  getArticlesSection,
  SectionType,
} from "exodus/services/home";
// import CoverImage from "../../../styles/assets/pics/hero/hero_7.jpg";
import {
  space,
  color,
  transitionTime,
  font,
  fontSize,
  iconSize,
  breakPoint,
} from "styles/const";
import { AppContext } from "exodus/context";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";
import { isYoutubeUrl } from "exodus/utils/uriUtils";
import { CarouselInfo } from "../organismes/carousels/carousels";

export const Article = ({
  articles,
  article,
}: {
  articles: ArticleType[];
  article: ArticleType;
}) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const [sections, setSections] = useState<SectionType[]>([]);

  useEffect(() => {
    getArticlesSection(article.id).then((resp) =>
      setSections(resp["hydra:member"])
    );
  }, [article.id]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header img={`https://symfony-xmt3.frb.io${article.coverImage}`}>
          <HeaderContent>
            <ContentBackButton
              onClick={() => {
                window.history.back();
              }}
              style={{}}
            >
              <Icon
                style={{ marginRight: space.xs }}
                name={"backarrow"}
                color={color.light.PureWhite}
              />
              Retour
            </ContentBackButton>
            <HeaderFoooter>
              <TitleInfo>
                <TitleText style={{ fontSize: fontSize.xxl }}>
                  {article.title}
                </TitleText>
                <TextHeader>{article.intro}</TextHeader>
                <TimeToRead>
                  <Icon
                    size={iconSize.s}
                    color={color.light.PureWhite}
                    name={"clock"}
                  />
                  <TextHeader style={{ margin: `0 0 0 ${space.xs}` }}>
                    Temps de lecture : {article.timeToRead}
                  </TextHeader>
                </TimeToRead>
              </TitleInfo>
            </HeaderFoooter>
          </HeaderContent>
        </Header>
        <Sections>
          {sections.map((section, i) => {
            return (
              <div key={i}>
                <Title>
                  <TitleTextSection isDark={isDark}>
                    {section.title}
                  </TitleTextSection>
                  <TitleDecoration />
                </Title>
                {section.image.map((img, i) => {
                  return (
                    <Image key={i} src={`https://symfony-xmt3.frb.io${img}`} />
                  );
                })}
                {section.text.map((text, i) => {
                  return (
                    <Text key={i} isDark={isDark}>
                      {text}
                    </Text>
                  );
                })}
                {section.doubleMedia.length > 0 && (
                  <DoubleMedia>
                    {section.doubleMedia.map((media) => {
                      return (
                        <>
                          {isYoutubeUrl(media) ? (
                            <>
                              <DoubleMediaVideo
                                src={media}
                                allowFullScreen={true}
                              />
                            </>
                          ) : (
                            <DoubleMediaPhoto
                              src={`https://symfony-xmt3.frb.io${media}`}
                            />
                          )}
                        </>
                      );
                    })}
                  </DoubleMedia>
                )}
              </div>
            );
          })}
        </Sections>
      </div>
      <CarouselContent>
        <CarouselInfo articles={articles.filter((a) => a.id !== article.id)} />
      </CarouselContent>
    </>
  );
};

const TimeToRead = styled.div`
  display: flex;
  align-items: center;
`;

const DoubleMedia = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${space.m} 0;

  @media (max-width: ${breakPoint.mobileOnly}) {
    height: ${rem(370)};
    flex-direction: column;
  }
`;

const DoubleMediaVideo = styled.iframe`
  width: 48%;
  border-radius: 10px;

  @media (max-width: ${breakPoint.mobileOnly}) {
    width: 100%;
  }
`;

const DoubleMediaPhoto = styled.img`
  width: 48%;
  border-radius: 10px;

  @media (max-width: ${breakPoint.mobileOnly}) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: ${space.m};
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderFoooter = styled.div`
  display: flex;
`;

const ContentBackButton = styled.div`
  font-size: ${fontSize.m};
  color: ${color.light.PureWhite};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  overflow: hidden;
  margin: ${space.l} 0 0 ${space.s};

  @media (min-width: ${breakPoint.mobileOnly}) {
    margin: ${space.l} 0 0 ${space.l};
  }
`;

const Sections = styled.div`
  margin: ${space.l} 0 0 ${space.s};
  width: 50%;
  @media (max-width: ${breakPoint.mobileOnly}) {
    margin: 0;
    padding: ${space.l} ${space.s};
    width: 100%;
  }
`;

const Text = styled.p<{ isDark?: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.medium.Manatee : color.light.PureWhite};
  margin: ${space.s} 0;
  line-height: 30px;
  font-size: ${fontSize.m};
  transition: ${transitionTime};
`;

const TextHeader = styled.p`
  color: ${color.light.PureWhite};
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

const TitleTextSection = styled.h2<{ isDark: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  transition: ${transitionTime};
  font-family: ${font.josefin};
  font-size: ${fontSize.xl};
`;

const TitleText = styled.h2`
  color: ${color.light.PureWhite};
  transition: ${transitionTime};
  font-family: ${font.josefin};
  font-size: ${fontSize.xl};
`;

const Header = styled.div<{ img: string }>`
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  width: 100%;
  height: 60vh;
  border-bottom-right-radius: 40px;
`;

const CarouselContent = styled.div`
  overflow: hidden;
  margin: ${space.l} 0 0 ${space.s};

  @media (min-width: 550px) {
    margin: ${space.l} 0 0 ${space.l};
  }
`;
