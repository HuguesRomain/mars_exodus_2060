import React, { useState } from "react";
import styled from "styled-components";
import { color, iconSize, fontSize, space } from "styles/const";
import { Icon } from "styles/atoms/icons";

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
  margin-left: ${space.xs};
  font-size: ${fontSize.s};
`;

type Props = {
  quantity: number;
};

export const Like = ({ quantity }: Props) => {
  let [like, setLike] = useState<number>(quantity);
  let [triger, setTriger] = useState<boolean>(false);

  const handleLike = () => {
    if (triger) return;
    setLike((like += 1));
    setTriger(true);
  };

  return (
    <Item onClick={handleLike}>
      <Icon size={iconSize.m} color={color.medium.Manatee} name={"like"} />
      <Text>{like}</Text>
    </Item>
  );
};
