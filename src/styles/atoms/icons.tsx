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
  Share,
  Comment,
  Like,
  Pics,
  Send,
  BackArrow,
  Logo,
  Back,
  Ticket,
  Forward,
  ForwardArrow,
  Eye,
  Check,
  Clock,
  Step,
  Ok,
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
  share = Share;
  comment = Comment;
  like = Like;
  pics = Pics;
  send = Send;
  backarrow = BackArrow;
  logo = Logo;
  back = Back;
  ticket = Ticket;
  forward = Forward;
  forwardArrow = ForwardArrow;
  eye = Eye;
  check = Check;
  clock = Clock;
  step = Step;
  ok = Ok;
}

export type IconName = keyof IconsMapping;
const iconsMapping = new IconsMapping();

export type IconProps = {
  name: IconName;
  color?: string | null;
  strokeColor?: string | null;
  secondColor?: string | null;
  size?: number | string;
  onClick?: (e: any) => void;
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  style?: CSSProperties;
};

export const Icon = (props: IconProps) => {
  const CorrespondingIcon = iconsMapping[props.name];

  const style: CSSProperties = {
    ...props.style,
  };

  return CorrespondingIcon ? (
    <CorrespondingIcon
      onClick={props.onClick}
      strokeColor={props.strokeColor}
      size={props.size}
      color={props.color}
      style={style}
    />
  ) : null;
};
