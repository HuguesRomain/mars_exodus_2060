import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { socialAppRouter } from "exodus/internal-router";
import { color, fontSize, space } from "styles/const";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";
import { isMobile } from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/context";

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${space.m};
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
  font-size: ${fontSize.s};
`;

const IconStyled = styled(Icon)`
  margin-right: ${space.xs};
`;

type Props = {
  quantity: number | undefined;
};

export const Comment = ({ quantity }: Props) => {
  const history = useHistory();
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;
  return (
    <Item
      onClick={() => {
        isMobile(windowSize) && history.push(socialAppRouter.comments());
      }}
    >
      <IconStyled color={color.medium.Manatee} name={"comment"} />
      <Text style={{ margin: `0 ${rem(2)} 0 ${space.xs}` }}>{quantity}</Text>
      {!isMobile(windowSize) && <Text>Commentaires</Text>}
    </Item>
  );
};
