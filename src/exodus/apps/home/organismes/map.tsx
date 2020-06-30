import React from "react";
import styled from "styled-components";
import MapImg from "../../../../styles/assets/pics/marsMap.jpg";
import { rem } from "polished";
import { space, breakPoint } from "styles/const";
import { HomeTitle } from "../globalStyle";
import { AppContext } from "exodus/context";
import { Icon } from "styles/atoms/icons";

const Places = [
  { name: "pas loin", position: "translateY(175px) translateX(50px)" },
  { name: "pas loin", position: "translateY(200px) translateX(110px)" },
  { name: "pas loin", position: "translateY(120px) translateX(155px)" },
  { name: "pas loin", position: "translateY(50px) translateX(320px)" },
  { name: "pas loin", position: "translateY(100px) translateX(345px)" },
  { name: "pas loin", position: "translateY(230px) translateX(345px)" },
  { name: "pas loin", position: "translateY(70px) translateX(480px)" },
  { name: "pas loin", position: "translateY(120px) translateX(540px)" },
  { name: "pas loin", position: "translateY(170px) translateX(600px)" },
  { name: "pas loin", position: "translateY(190px) translateX(700px)" },
];

export const MapComponent = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <MapWrapper>
      <HomeTitle isDark={isDark}>Lieux à visiter</HomeTitle>
      {Places.map((place) => {
        return (
          <Icon
            style={{
              position: "absolute",
              transform: place.position,
            }}
            name={"step"}
          />
        );
      })}
      <MapStyled src={MapImg} />
    </MapWrapper>
  );
};

const MapStyled = styled.img`
  width: ${rem(850)};
  height: ${rem(300)};
  margin-bottom: ${space.l};
  border-radius: 10px;

  @media (max-width: ${breakPoint.tabletLandscape}) {
    width: ${rem(400)};
    height: ${rem(160)};
  }
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
