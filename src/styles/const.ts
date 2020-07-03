import { rem } from "polished";

export const color = {
  light: {
    PureWhite: "#ffffff",
    WhiteSmoke: "#F8F8F8",
    Solitude: "#E8ECEF",
    AliceBlue: "#F3F8FE",
  },
  medium: {
    Manatee: "#848897",
  },
  darker: {
    DarkestBlack: "#090513",
    BlackRussian: "#091124",
    BlackPearl: "#0D2E47",
    LuckyPoint: "#292C59",
  },
  transparent: {
    SunsetOrangeTrans: "rgba(249, 138, 113, 0.1)",
    BlackPearlTrans: "rgba(153, 155, 168, 0.15)",
  },

  Alizarin: "#E02637",
  SunsetOrange: "#FC5252",
  Lipstick: "#9B1D44",
};

export const breakPoint = {
  mobileOnly: "599px",
  tabletPortrait: "600px",
  tabletLandscape: "1199px",
  desktop: "1200px",
};

export const font = {
  avenir: "Avenir",
  josefin: "Josefin Sans",
};

export const fontWeight = {
  avenir: {
    m: 500,
    l: 800,
  },
  josefin: {
    s: 600,
    m: "normal",
    l: "bold",
  },
};

export const fontSize = {
  xs: rem(12),
  s: rem(14),
  m: rem(16),
  l: rem(18),
  xl: rem(24),
  xxl: rem(40),
  xxxl: rem(42),
};

export const titeFontsize = {
  s: rem(20),
  m: rem(46),
  l: rem(90),
};

export const space = {
  xs: rem(8),
  s: rem(16),
  m: rem(24),
  l: rem(48),
  xl: rem(80),
};

export const iconSize = {
  xs: rem(8),
  s: rem(16),
  m: rem(24),
  l: rem(32),
  xl: rem(48),
  xxl: rem(64),
};

export const boxShadows = {
  light: "0px 5px 15px rgba(153, 155, 168, 0.15)",
  dark: "0px 5px 15px rgba(0, 0, 0, 0.15);",
};

export const transitionTime = "0.7s";
