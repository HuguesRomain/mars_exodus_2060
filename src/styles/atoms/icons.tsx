import React, { CSSProperties } from "react";
// import styled from "styled-components";
import { Home, Calendar, Social, Profile } from "../assets/icons/icons";

export class IconsMapping {
  home = Home;
  calendar = Calendar;
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
  onClick?: (e: any) => void;
};

export const Icon = (props: Props) => {
  const style: CSSProperties = {
    fill: props.color ? props.color : "grey",
    ...props.style,
    maxHeight: `${props.size}px`,
    maxWidth: `${props.size}px`,
  };

  const CorrespondingIcon = iconsMapping[props.name];

  return CorrespondingIcon ? (
    <svg style={style} onClick={props.onClick}>
      <CorrespondingIcon />
    </svg>
  ) : null;
};

// Todo : Change the svg logic or found a adequate lib
