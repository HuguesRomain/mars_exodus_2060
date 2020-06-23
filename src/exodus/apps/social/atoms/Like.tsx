import React, { useState } from "react";
import styled from "styled-components";
import icons from "../../../../assets/icons.svg";

const Item = styled.div`
  display: flex;
  padding: 0 30px;
`;
const Icon = styled.svg`
  fill: grey;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

type Props = {
  quantity: number;
};

export const Like = ({ quantity }: Props) => {
  let [like, setLike] = useState<number>(quantity);
  let [triger, setTriger] = useState<boolean>(false);

  const handleLike = (event: React.MouseEvent<HTMLElement>) => {
    if (triger) return;
    setLike((like += 1));
    setTriger(true);
  };

  return (
    <Item onClick={handleLike}>
      <Icon>
        <use xlinkHref={`${icons}#like`} />
      </Icon>
      <p>{like}</p>
    </Item>
  );
};
