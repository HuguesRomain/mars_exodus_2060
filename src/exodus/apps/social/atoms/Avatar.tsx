import React, { CSSProperties } from "react";
import styled from "styled-components";

const AvatarStyled = styled.img<{ src: string; size: string }>`
  width: ${(props) => (props.size ? props.size : "48px")};
  height: ${(props) => (props.size ? props.size : "48px")};
  object-fit: cover;
  border-radius: 50%;
  align-self: center;
`;

export const Avatar = ({
  src,
  size,
  style,
}: {
  src: string;
  size: string;
  style?: CSSProperties;
}) => {
  return (
    <AvatarStyled
      style={style && style}
      src={src}
      alt="avatar of user"
      size={size}
    />
  );
};
