import React, { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Pin
      isHovered={isHovered}
      isGrey={isGrey}
      onMouseEnter={() => {
        onMouseEnter && onMouseEnter();
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        onMouseLeave && onMouseLeave();
        setIsHovered(false);
      }}
      onClick={onClick}
    >
      <PulserStyled isGrey={isGrey} />
    </Pin>
  );
};

const Pin = styled.div<{ isHovered: boolean; isGrey: boolean | undefined }>`
  z-index: ${(props) => (props.isHovered ? "200000000" : "1")};
  width: ${rem(12)};
  height: ${rem(12)};
  border-radius: 50%;
  cursor: pointer;
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
