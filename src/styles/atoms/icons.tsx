import React, { CSSProperties } from "react";
// import styled from "styled-components";
import { Home, Calandar, Social, Profile } from "../assets/icons/icons";

// const IconStyled = styled.svg``;

export class IconsMapping {
  home = Home;
  calandar = Calandar;
  social = Social;
  profile = Profile;
}

export type IconName = keyof IconsMapping;
const iconsMapping = new IconsMapping();

type Props = {
  name: IconName;
  color?: string | null;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
};

export const Icon = (props: Props) => {
  // const style: CSSProperties = {
  //   fontSize: props.size,
  //   color: props.color ? props.color : undefined,
  //   ...props.style,
  // };

  const CorrespondingIcon = iconsMapping[props.name];
  return CorrespondingIcon ? <CorrespondingIcon /> : null;
};
