import React from "react";
import styled from "styled-components";
import icons from "../../../../assets/icons.svg";

const Item = styled.div`
  display: flex;
  margin-right: auto;
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

export const Share = () => {
  return (
    <Item>
      <Icon>
        <use xlinkHref={`${icons}#share`} />
      </Icon>
      <p>Partager</p>
    </Item>
  );
};
