export const isDarkStorage = () => {
  const saveMode = JSON.parse(localStorage.getItem("dark") || "{}");
  return saveMode === true || saveMode === false
    ? saveMode
    : window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;
};

export const TokenStorage = (): string => {
  const Token = JSON.parse(localStorage.getItem("token") || "{}");
  return typeof Token === "string" ? Token : "";
};

export const UsernameStorage = () => {
  const Username = JSON.parse(localStorage.getItem("username") || "{}");
  return typeof Username === "string" ? Username : null;
};

export const UserStorage = (): UserInfoType => {
  const User = JSON.parse(localStorage.getItem("user") || "{}");
  return typeof User === "object" ? User : null;
};

export const IsFirstConnection = (): UserInfoType => {
  const isFirstConnection = JSON.parse(
    localStorage.getItem("isFirstConnection") || "{}"
  );
  return typeof isFirstConnection === "object"
    ? isFirstConnection.isFirstConnection
    : null;
};
