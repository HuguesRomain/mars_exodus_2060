import React, { useState } from "react";
import styled from "styled-components";
import MapImg from "../../../../styles/assets/pics/marsMap.jpg";
import { rem } from "polished";
import { space, breakPoint, color } from "styles/const";
import { HomeTitle } from "../globalStyle";
import { AppContext } from "exodus/context";
import Img from "../../../../styles/assets/pics/hero/hero_7.jpg";
import { PlaceType } from "exodus/services/home";

const PlacesPosition = [
  { position: "translateY(175px) translateX(50px)" },
  { position: "translateY(200px) translateX(110px)" },
  { position: "translateY(120px) translateX(155px)" },
  { position: "translateY(50px) translateX(320px)" },
  { position: "translateY(100px) translateX(345px)" },
  { position: "translateY(230px) translateX(345px)" },
  { position: "translateY(70px) translateX(480px)" },
  { position: "translateY(120px) translateX(540px)" },
  { position: "translateY(170px) translateX(600px)" },
  { position: "translateY(190px) translateX(700px)" },
];

export const MapComponent = ({ places }: { places: PlaceType[] }) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <MapWrapper>
      <HomeTitle isDark={isDark}>Lieux à visiter</HomeTitle>
      {PlacesPosition.map((PlacePosition, i) => {
        return (
          <PinAndPopup
            key={i}
            place={places[i]}
            PlacePosition={PlacePosition.position}
          />
        );
      })}
      <MapStyled />
    </MapWrapper>
  );
};

const MapStyled = styled.div`
  width: ${rem(850)};
  height: ${rem(300)};
  margin-bottom: ${space.l};
  border-radius: 10px;
  background-image: url(${MapImg});
  background-size: cover;
  @media (max-width: ${breakPoint.tabletLandscape}) {
    width: ${rem(400)};
    height: ${rem(160)};
  }
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PinAndPopup = ({
  place,
  PlacePosition,
}: {
  place: PlaceType;
  PlacePosition: string;
}) => {
  const [isPinHovered, setIsPinHovered] = useState<boolean>(false);
  const [isPopupHovered, setIsPopupHovered] = useState<boolean>(false);

  const isPopupOpen = (): boolean => {
    if (isPinHovered === true || isPopupHovered === true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <PinContent
      style={{
        transform: PlacePosition,
      }}
    >
      <Popup
        isPopupOpen={isPopupOpen()}
        onMouseEnter={() => {
          setIsPopupHovered((prevState) => !prevState);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setIsPopupHovered((prevState) => !prevState);
          }, 200);
        }}
      >
        <ContentPopup></ContentPopup>
      </Popup>
      <Pin
        onMouseEnter={() => {
          setIsPinHovered((prevState) => !prevState);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setIsPinHovered((prevState) => !prevState);
          }, 200);
        }}
      >
        <Pulser />
      </Pin>
    </PinContent>
  );
};

const PinContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Pin = styled.div`
  z-index: 1;
  width: ${rem(12)};
  height: ${rem(12)};
  border-radius: 50%;
  background-color: ${color.SunsetOrange};
`;

const Pulser = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background-color: inherit;
  :hover {
    animation: pulse 1.75s ease-out infinite;
  }
`;

const Popup = styled.div<{ isPopupOpen: boolean }>`
  z-index: 10;
  position: absolute;
  background-image: url(${Img});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: ${rem(209)};
  height: ${(props) => (props.isPopupOpen ? rem(143.98) : "0")};
  transform: translateY(-30px);
  transition: height 0.3s;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 11px solid transparent;
    border-top-color: black;
    border-bottom: 0;
    margin-left: -11px;
    margin-bottom: -11px;
    opacity: ${(props) => (props.isPopupOpen ? "1" : "0")};
    transition: opacity 0.1s;
  }
`;

const ContentPopup = styled.div`
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 111.18%);
`;
