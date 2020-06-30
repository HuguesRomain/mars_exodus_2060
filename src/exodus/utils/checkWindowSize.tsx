const mobile = 599;
const tabletPortrait = 600;
const tabletLandscape = 1199;
const desktop = 1200;

export const isMobileOnly = (current: number) => current <= mobile;

export const isTabletPortrait = (current: number) =>
  current < tabletLandscape && current > mobile;

export const isPortrait = (current: number) => current <= tabletPortrait;

export const isMobile = (current: number) => current < desktop;

export const isTabletLandscape = (current: number) =>
  current < desktop && current > tabletPortrait;

export const isDesktop = (current: number) => current >= desktop;

export const isMinTabletPortrait = (current: number) =>
  current >= tabletPortrait;
