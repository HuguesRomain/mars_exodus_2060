import React from "react";
import { isDarkStorage } from "styles/const";

type ContextType = {
  isDarkContext: [boolean, () => void];
  tokenContext: [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>>
  ];
  windowSizeContext: [number, React.Dispatch<React.SetStateAction<number>>];
};

const InitialState: ContextType = {
  isDarkContext: [isDarkStorage(), () => {}],
  tokenContext: [null, () => {}],
  windowSizeContext: [0, () => {}],
};

export const AppContext = React.createContext(InitialState);
