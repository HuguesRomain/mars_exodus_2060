import { UriType } from "exodus/internal-router";

export const isLocation = (uri: UriType) =>
  window.location.pathname.includes(uri);
