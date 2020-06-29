import React from "react";
import { isDarkStorage } from "styles/const";

type ContextType = {
  isDarkContext: [boolean, () => void];
  tokenContext: [
    string | null,
    React.Dispatch<React.SetStateAction<string | null>>
  ];
};

const InitialState: ContextType = {
  isDarkContext: [isDarkStorage(), () => {}],
  tokenContext: [null, () => {}],
};

export const AppContext = React.createContext(InitialState);
