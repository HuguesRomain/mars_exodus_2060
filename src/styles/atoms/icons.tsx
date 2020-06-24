import React, { CSSProperties } from "react";
import {
  Home,
  Calendar,
  Social,
  Profile,
  Sun,
  Earth,
  Mars,
  Moon,
  Pin,
  Disconnect,
} from "../assets/icons/icons";

export class IconsMapping {
  home = Home;
  calendar = Calendar;
  social = Social;
  profile = Profile;
  sun = Sun;
  moon = Moon;
  earth = Earth;
  mars = Mars;
  pin = Pin;
  disconnect = Disconnect;
}

export type IconName = keyof IconsMapping;
const iconsMapping = new IconsMapping();

export type IconProps = {
  name: IconName;
  color?: string | null;
  secondColor?: string | null;
  size?: number | string;
  onClick?: (e: any) => void;
  style?: CSSProperties;
};

export const Icon = (props: IconProps) => {
  const CorrespondingIcon = iconsMapping[props.name];

  return CorrespondingIcon ? (
    <CorrespondingIcon
      onClick={props.onClick}
      size={props.size}
      color={props.color}
      style={props.style}
    />
  ) : null;
};
