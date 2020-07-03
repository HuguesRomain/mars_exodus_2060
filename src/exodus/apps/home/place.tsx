import React from "react";
import styled from "styled-components";
import { PlaceType } from "exodus/services/home";
import {
  space,
  color,
  fontSize,
  iconSize,
  transitionTime,
  font,
} from "styles/const";
import { Icon } from "styles/atoms/icons";
import { AppContext } from "exodus/context";
import { rem } from "polished";
import { isYoutubeUrl } from "exodus/utils/uriUtils";

export const Place = ({ place }: { place: PlaceType }) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header img={`https://symfony-xmt3.frb.io${place.coverImage}`}>
        <HeaderContent>
          <ContentBackButton
            onClick={() => {
              window.history.back();
            }}
            style={{}}
          >
            {console.log("place", place)}
            <Icon
              style={{ marginRight: space.xs }}
              name={"backarrow"}
              color={color.light.PureWhite}
            />
            Retour
          </ContentBackButton>
          <HeaderFoooter>
            <TitleInfo>
              <Text isDark={isDark}>{place.Category}</Text>
              <TitleText style={{ fontSize: fontSize.xxl }} isDark={isDark}>
                {place.PlaceName}
              </TitleText>
            </TitleInfo>
          </HeaderFoooter>
        </HeaderContent>
      </Header>
      <Sections>
        <div>
          {place.Text.map((text, i) => {
            return (
              <Text key={i} isDark={isDark}>
                {text}
              </Text>
            );
          })}
          {place.DoubleMedia.length > 0 && (
            <DoubleMedia>
              {place.DoubleMedia.map((media) => {
                return (
                  <>
                    {isYoutubeUrl(media) ? (
                      <>
                        <DoubleMediaVideo src={media} allowFullScreen={true} />
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
      </Sections>
    </div>
  );
};

const DoubleMedia = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${space.m} 0;

  @media (max-width: 550px) {
    height: ${rem(370)};
    flex-direction: column;
  }
`;

const DoubleMediaVideo = styled.iframe`
  width: 48%;
  border-radius: 10px;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

const DoubleMediaPhoto = styled.img`
  width: 48%;
  border-radius: 10px;

  @media (max-width: 550px) {
    width: 100%;
  }
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

  @media (min-width: 550px) {
    margin: ${space.l} 0 0 ${space.l};
  }
`;

const Sections = styled.div`
  margin: ${space.l} 0 0 ${space.s};
  width: 50%;
  @media (max-width: 550px) {
    margin: 0;
    padding: ${space.l} ${space.s};
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

const Header = styled.div<{ img: string }>`
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  width: 100%;
  height: 60vh;
  border-bottom-right-radius: 40px;
`;
