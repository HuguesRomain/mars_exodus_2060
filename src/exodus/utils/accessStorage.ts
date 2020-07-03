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

export const UsernameStorage = () => {
  const Username = JSON.parse(localStorage.getItem("username") || "{}");
  return typeof Username === "string" ? Username : null;
};

export const UserStorage = () => {
  const User = JSON.parse(localStorage.getItem("user") || "{}");
  return typeof User === "string" ? User : null;
};
