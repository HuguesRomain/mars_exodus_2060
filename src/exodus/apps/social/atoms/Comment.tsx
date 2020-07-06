import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { socialAppRouter } from "exodus/internal-router";
import { color, fontSize, space } from "styles/const";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";
import { isMobile } from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/context";

const Item = styled(Link)`
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
  comments: string[] | undefined;
  postId?: string;
};

export const Comment = ({ quantity, comments, postId }: Props) => {
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;

  const acces = (() => {
    return isMobile(windowSize) ? socialAppRouter.comments() : "";
  })();

  const routeProp = {
    pathname: acces,
    param1: comments,
    param2: postId,
  };

  return (
    <div>
      <Item to={routeProp}>
        <IconStyled color={color.medium.Manatee} name={"comment"} />
        <Text style={{ margin: `0 ${rem(2)} 0 ${space.xs}` }}>
          {quantity && quantity}
        </Text>
        {!isMobile(windowSize) && <Text>Commentaires</Text>}
      </Item>
    </div>
  );
};
