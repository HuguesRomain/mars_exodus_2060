import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { color } from "styles/const";

export const Pulser = ({
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}) => {
  return (
    <Pin
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <PulserStyled />
    </Pin>
  );
};

const Pin = styled.div`
  z-index: 1;
  width: ${rem(12)};
  height: ${rem(12)};
  border-radius: 50%;
  background-color: ${color.SunsetOrange};
`;

const PulserStyled = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background-color: inherit;
  :hover {
    animation: pulse 1.75s ease-out infinite;
  }
`;
