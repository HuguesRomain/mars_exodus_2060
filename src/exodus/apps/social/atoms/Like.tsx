import React, { useState } from "react";
import styled from "styled-components";
import { color } from "styles/const";
import { Icon } from "styles/atoms/icons";
import { rem } from "polished";

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
  margin-left: ${rem(10)};
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
      <Icon color={color.medium.Manatee} name={"like"} />
      <Text>{like}</Text>
    </Item>
  );
};
