import {
  homeAppRouter,
  socialAppRouter,
  calendarAppRouter,
  profileAppRouter,
  UriType,
} from "../../../internal-router";
import { IconName } from "styles/atoms/icons";
import { isMobile } from "exodus/utils/checkWindowSize";

export type AppsTypes = {
  label: string;
  uri: UriType;
  icon: IconName;
  order: number;
};

export const apps: AppsTypes[] = [
  {
    label: "Accueil",
    uri: homeAppRouter.home(),
    icon: "home",
    order: 1,
  },
  {
    label: "Calendrier",
    uri: calendarAppRouter.calendar(),
    icon: "calendar",
    order: 2,
  },
  {
    label: "Social",
    uri: socialAppRouter.social(),
    icon: "social",
    order: 3,
  },
  {
    label: "Compte",
    uri: isMobile(window.innerWidth)
      ? profileAppRouter.identity()
      : profileAppRouter.profile(),
    icon: "profile",
    order: 4,
  },
];
