import React from "react";
import styled from "styled-components";
import icons from "../../../../assets/icons.svg";

import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const goToComments = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      history.push("/app/comments");
    } else console.log("sorry bro");
  };

  return (
    <Item onClick={goToComments}>
      <Icon>
        <use xlinkHref={`${icons}#comments`} />
      </Icon>
      <p>{quantity}</p>
    </Item>
  );
};
