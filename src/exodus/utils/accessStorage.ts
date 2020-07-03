export const isDarkStorage = () => {
  const saveMode = JSON.parse(localStorage.getItem("dark") || "{}");
  return saveMode === true || saveMode === false
    ? saveMode
    : window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;
};

export const TokenStorage = () => {
  const Token = JSON.parse(localStorage.getItem("token") || "{}");
  return typeof Token === "string" ? Token : null;
};
