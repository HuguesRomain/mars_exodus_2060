import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { color } from "styles/const";

export const Pulser = ({
  onMouseEnter,
  onMouseLeave,
  onClick,
  isGrey,
}: {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  isGrey?: boolean;
}) => {
  return (
    <Pin
      isGrey={isGrey}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <PulserStyled isGrey={isGrey} />
    </Pin>
  );
};

const Pin = styled.div<{ isGrey: boolean | undefined }>`
  z-index: 1;
  width: ${rem(12)};
  height: ${rem(12)};
  border-radius: 50%;
  background-color: ${(props) =>
    props.isGrey ? color.medium.Manatee : color.SunsetOrange};
`;

const PulserStyled = styled.div<{ isGrey: boolean | undefined }>`
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background-color: inherit;
  :hover {
    animation: ${(props) => !props.isGrey && "pulse 1.75s ease-out infinite"};
  }
`;
