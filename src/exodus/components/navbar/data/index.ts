import {
  homeAppRouter,
  socialAppRouter,
  calandarAppRouter,
  profileAppRouter,
} from "../../../internal-router";

export const apps = [
  {
    label: "Accueil",
    uri: homeAppRouter.home(),
    icon: "path/to/icon",
    order: 1,
  },
  {
    label: "Calendrier",
    uri: calandarAppRouter.calandar(),
    icon: "path/to/icon",
    order: 2,
  },
  {
    label: "Social",
    uri: socialAppRouter.social(),
    icon: "path/to/icon",
    order: 3,
  },
  {
    label: "Compte",
    uri: profileAppRouter.profile(),
    icon: "path/to/icon",
    order: 4,
  },
];

/* Ordre correspond à leurs positions dans la barre de navigation 
ça peut être utile de préciser l'information */
