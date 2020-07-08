import React from "react";
import styled from "styled-components";
import { color, space, fontSize } from "styles/const";
import { rem } from "polished";
import { PlaceType } from "exodus/services/home";

export const CarouselPlacesItems = ({ place }: { place: PlaceType }) => {
  return (
    <Card
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      img={`https://symfony-xmt3.frb.io${place.CoverImage}`}
    >
      <TextContent>
        <Category>{place.Category}</Category>
        <Name>{place.PlaceName}</Name>
      </TextContent>
    </Card>
  );
};

const Card = styled.div<{ img: string }>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: ${rem(190)};
  height: ${rem(220)};
  border-radius: 10px;
  background-image: ${(props) => `url(${props.img})`};
`;

const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
`;

const Category = styled.p`
  margin-bottom: ${space.xs};
  color: ${color.light.PureWhite};
  font-size: ${fontSize.s};
`;
const Name = styled.p`
  margin-bottom: ${space.s};
  color: ${color.light.PureWhite};
  font-size: ${fontSize.l};
`;
