import React from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { color } from "styles/const";
import { rem } from "polished";

const Item = styled.div`
  display: flex;
  margin-right: auto;
  align-items: center;
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
  margin-left: ${rem(10)};
`;

type Props = {
  quantity: number;
};

export const Share = () => {
  return (
    <Item>
      <Icon color={color.medium.Manatee} name={"share"} />
      <Text>Partager</Text>
    </Item>
  );
};
