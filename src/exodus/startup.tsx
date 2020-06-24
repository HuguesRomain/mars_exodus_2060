import React from "react";
import { AppContext } from "./oldMain";

export const AppFrame = ({ children }: { children: JSX.Element }) => (
  <AppContext.Provider value={null}>{children}</AppContext.Provider>
);
