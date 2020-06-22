import React, { CSSProperties } from "react";
// // import styled from "styled-components";
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
  const CorrespondingIcon = iconsMapping[props.name];

  return CorrespondingIcon ? <CorrespondingIcon /> : null;
};

// Todo : Change the svg logic or found a adequate lib
