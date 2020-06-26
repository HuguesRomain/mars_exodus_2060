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
    BlackRussian: "#091124",
    BlackPearl: "#072033",
    LuckyPoint: "#292C59",
  },

  Alizarin: "#E02637",
  SunsetOrange: "#FC5252",
  Lipstick: "#9B1D44",
};

export const isDarkStorage = () => {
  const saveMode = JSON.parse(localStorage.getItem("dark") || "{}");
  return saveMode || false;
};

export const breakPoint = {
  mobileOnly: "599px",
  tabletPortrait: "600px",
  tabletLandscape: "900px",
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
