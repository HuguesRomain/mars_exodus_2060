import React from "react";
import styled, { css } from "styled-components";
import NasaIcon from "../../../../styles/assets/icons/nasa.png";
import Spacex from "../../../../styles/assets/icons/spacex.png";
import { rem } from "polished";
import { color, fontSize, space, breakPoint, titeFontsize } from "styles/const";
import { Button } from "exodus/components/atoms/button";
import LandingImage from "../../../../styles/assets/pics/landing.png";
import hetic from "../../../../styles/assets/icons/hetic.png";
import { homeAppRouter } from "exodus/internal-router";

export const Landing = () => {
  return (
    <LandingPage image={LandingImage}>
      <Header>
        <MarkContent>
          <NasaIconStyled src={NasaIcon} />
          <NasaText>National Aeronautics and Space Administration</NasaText>
          <SpacexIconStyled src={Spacex} />
        </MarkContent>
      </Header>
      <BodyContent>
        <Hashtag>#MARS EXODUS 2060</Hashtag>
        <NewLife>Votre nouvelle vie</NewLife>
        <Title>AU-DELÀ DE L'UNIVERS</Title>
        <Paragraph>
          227,937 millions de kilomètres. 7 mois de voyage. 1 000 Starships. 1
          million de nouveaux résidents. Une nouvelle société à construire.
        </Paragraph>
        <a href={homeAppRouter.home()}>
          <Button type={"secondary"} styled={CustomButton} iconName={"rocket"}>
            <p style={{ marginLeft: rem(10) }}>SUIVRE L’EXPEDITION</p>
          </Button>
        </a>
      </BodyContent>
      <FooterContent>
        <RightContent>
          <HeticImage src={hetic} />
          <FooterText style={{ maxWidth: rem(720) }}>
            Ce site a été réalisé à des fins pédagogiques dans le cadre du
            cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas
            fait l'objet d'une demande de droit d'utilisation. Ce site ne sera
            en aucun cas exploité à des fins commerciales et ne sera pas publié.
          </FooterText>
        </RightContent>

        <FooterText>
          Made with{" "}
          <span role="img" aria-label="pop">
            🎉
          </span>{" "}
          by <br />
          Nastasia DOTLIC - Amandine DONAT FILLIOD - Hugues ROMAIN - Louis
          ZAWADKA - Maksym YANKIVSKYY
        </FooterText>
      </FooterContent>
    </LandingPage>
  );
};

const RightContent = styled.div`
  display: flex;
`;

const FooterText = styled.p`
  color: ${color.light.PureWhite};
  line-height: 20px;
  font-size: ${fontSize.xs};
`;

const HeticImage = styled.img`
  width: ${rem(100)};
  @media (min-width: ${breakPoint.tabletPortrait}) {
    width: ${rem(150)};
  }
`;

const FooterContent = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: ${rem(20)} ${rem(10)};
  @media (min-width: ${breakPoint.tabletPortrait}) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: ${breakPoint.desktop}) {
    flex-direction: row;
  }
`;

const CustomButton = css`
  flex-direction: row-reverse;
`;

const LandingPage = styled.div<{ image: string }>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: ${breakPoint.tabletPortrait}) {
    display: flex;
    justify-content: space-between;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${space.l} ${space.m};
`;

const MarkContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NasaIconStyled = styled.img`
  width: ${rem(57.76)};
`;

const SpacexIconStyled = styled.img`
  width: ${rem(100)};
  @media (min-width: ${breakPoint.tabletPortrait}) {
    width: ${rem(200)};
  }
`;

const NasaText = styled.p`
  color: ${color.light.PureWhite};
  max-width: ${rem(180)};
  line-height: 16px;
  font-size: ${fontSize.s};
  margin-left: ${space.xs};
`;

const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Hashtag = styled.p`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(252, 82, 82, 1) 200%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-size: ${titeFontsize.s};
  margin-bottom: ${space.xl};
  @media (min-width: ${breakPoint.tabletPortrait}) {
    font-size: ${titeFontsize.m};
  }
`;

const NewLife = styled.p`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(252, 82, 82, 1) 200%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-size: 30px;
  margin-bottom: ${space.m};
`;

const Title = styled.h1`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(252, 82, 82, 1) 200%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${titeFontsize.m};
  text-align: center;
  margin: 0;
  margin-bottom: ${space.l};
  @media (min-width: ${breakPoint.tabletPortrait}) {
    font-size: ${titeFontsize.m};
    margin-bottom: ${space.m};
  }
  @media (min-width: ${breakPoint.desktop}) {
    font-size: ${titeFontsize.l};
  }
`;

const Paragraph = styled.p`
  color: ${color.light.PureWhite};
  max-width: ${rem(751)};
  text-align: center;
  line-height: 26px;
  font-size: ${fontSize.xs};
  margin-bottom: ${space.l};
  padding: 0 ${rem(50)};
  @media (min-width: ${breakPoint.tabletPortrait}) {
    font-size: ${fontSize.s};
    margin-bottom: ${space.m};
  }
  @media (min-width: ${breakPoint.desktop}) {
    font-size: ${fontSize.m};
  }
`;
