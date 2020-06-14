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
    order: 1,
  },
  {
    label: "Calendrier",
    uri: calandarAppRouter.calandar(),
    order: 2,
  },
  {
    label: "Social",
    uri: socialAppRouter.social(),
    order: 3,
  },
  {
    label: "Compte",
    uri: profileAppRouter.profile(),
    order: 4,
  },
];

/* Ordre correspond à leurs positions dans la barre de navigation 
ça peut être utile de préciser l'information */
