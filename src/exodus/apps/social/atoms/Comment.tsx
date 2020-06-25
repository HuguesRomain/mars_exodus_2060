import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { socialAppRouter } from "exodus/internal-router";
import { color } from "styles/const";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";
import { isMobile } from "react-device-detect";

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${rem(10)};
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
`;

const IconStyled = styled(Icon)`
  margin-right: ${rem(10)};
`;

type Props = {
  quantity: number;
};

export const Comment = ({ quantity }: Props) => {
  const history = useHistory();

  return (
    <Item
      onClick={() => {
        isMobile && history.push(socialAppRouter.comments());
      }}
    >
      <IconStyled color={color.medium.Manatee} name={"comment"} />
      <Text style={{ margin: `0 ${rem(5)}` }}>{quantity}</Text>
      {!isMobile && <Text>Commentaires</Text>}
    </Item>
  );
};
