import React from "react";
import styled, { css } from "styled-components";
import { color, space, fontSize } from "styles/const";
import { rem } from "polished";
import Proctor from "../../../../styles/assets/pics/proctor.jpg";

export const CarouselPlacesItems = () => {
  return (
    <Card>
      <TextContent>
        <Category>Catégorie</Category>
        <Name>Nom lieux</Name>
      </TextContent>
      <ItemContent src={Proctor} />
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ItemContent = styled.img`
  width: ${rem(190)};
  height: ${rem(220)};
  border-radius: 10px;
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
