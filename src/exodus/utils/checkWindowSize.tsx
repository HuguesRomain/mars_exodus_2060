const mobile = 599;
const tabletPortrait = 600;
const tabletLandscape = 900;
const desktop = 1200;

const current = window.screen.width;

export const isMobileOnly = () => current <= mobile;

export const isTabletPortrait = () =>
  current < tabletLandscape && current > mobile;

export const isMobile = () => current < desktop;

export const isTabletLandscape = () =>
  current < desktop && current > tabletPortrait;

export const isDesktop = () => current >= desktop;

export const isMinTabletPortrait = () => current >= tabletPortrait;
