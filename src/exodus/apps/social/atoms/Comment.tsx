import React from "react";
import styled from "styled-components";
import icons from "../../../../assets/icons.svg";

const Item = styled.div`
  display: flex;
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

export const Comment = ({ quantity }: Props) => {
  return (
    <Item>
      <Icon>
        <use xlinkHref={`${icons}#comments`} />
      </Icon>
      <p>{quantity}</p>
    </Item>
  );
};
