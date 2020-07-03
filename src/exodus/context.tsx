import React from "react";
import { isDarkStorage, TokenStorage } from "./utils/accessStorage";

type ContextType = {
  isDarkContext: [boolean, () => void];
  tokenContext: [string | null];
  setTokenContext: [(token: string | null) => void];
  usernameContext: [string | null];
  setUsernameContext: [(username: string | null) => void];
  windowSizeContext: [number, React.Dispatch<React.SetStateAction<number>>];
};

const InitialState: ContextType = {
  isDarkContext: [isDarkStorage(), () => {}],
  tokenContext: [TokenStorage()],
  setTokenContext: [() => {}],
  usernameContext: [null],
  setUsernameContext: [() => {}],
  windowSizeContext: [0, () => {}],
};

export const AppContext = React.createContext(InitialState);
