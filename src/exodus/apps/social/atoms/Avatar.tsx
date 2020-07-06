import React, { CSSProperties } from "react";
import styled from "styled-components";
import { iconSize } from "styles/const";

type AvatarProps = {
  src: string;
  size: string;
  style?: CSSProperties;
};

export const Avatar = ({ src, size, style }: AvatarProps) => {
  return (
    <AvatarStyled
      style={style && style}
      src={src}
      alt="avatar of user"
      size={size}
    />
  );
};

const AvatarStyled = styled.img<{ src: string; size: string }>`
  width: ${(props) => (props.size ? props.size : iconSize.xl)};
  height: ${(props) => (props.size ? props.size : iconSize.xl)};
  object-fit: cover;
  border-radius: 50%;
  align-self: center;
`;
