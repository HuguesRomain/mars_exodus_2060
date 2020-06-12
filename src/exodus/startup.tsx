import React from "react";
import { AppContext } from "./main";

export const AppFrame = ({children}: {children: JSX.Element}) => (
    <AppContext.Provider value={null}>
        {children}
    </AppContext.Provider>
)