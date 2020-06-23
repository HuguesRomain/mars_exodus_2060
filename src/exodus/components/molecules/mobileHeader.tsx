import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";
import { LabelOverlay } from "../navbar";

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${rem(69)};
`;

export const MobileHeader = () => {
  return (
    <WrapperHeader>
      <Icon name={"sun"} size={"32"} />
      <LabelOverlay>Mercredi 10 Juin 09:48</LabelOverlay>
      <Icon name={"earth"} size={"32"} />
    </WrapperHeader>
  );
};
