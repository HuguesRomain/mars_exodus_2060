import React from "react";
import { AppContext } from "./main";
import { NavBarContainer } from "./components/navbar";

export const AppFrame = ({ children }: { children: JSX.Element }) => (
  <AppContext.Provider value={null}>
    <NavBarContainer />
    {children}
  </AppContext.Provider>
);
