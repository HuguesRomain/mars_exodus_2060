import React from "react";
import { isDarkStorage, TokenStorage } from "./utils/accessStorage";

type ContextType = {
  isDarkContext: [boolean, () => void];
  tokenContext: [string | null];
  setTokenContext: [(token: string | null) => void];
  windowSizeContext: [number, React.Dispatch<React.SetStateAction<number>>];
};

const InitialState: ContextType = {
  isDarkContext: [isDarkStorage(), () => {}],
  tokenContext: [TokenStorage()],
  setTokenContext: [() => {}],
  windowSizeContext: [0, () => {}],
};

export const AppContext = React.createContext(InitialState);
