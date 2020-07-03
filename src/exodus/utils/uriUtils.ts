import { UriType } from "exodus/internal-router";

export const isLocation = (uri: UriType) =>
  window.location.pathname.includes(uri);

export const isYoutubeUrl = (url: string) => {
  var p: RegExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (url.match(p)) {
    // @ts-ignore
    return url.match(p)[1];
  }
  return false;
};
