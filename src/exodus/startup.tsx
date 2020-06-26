import React, { useState, createContext } from "react";
import { isDarkStorage } from "styles/const";

export const AppContext = createContext({});

export const AppFrame = ({ children }: { children: JSX.Element }) => {
  const [isDark, setIsDarkContext] = useState<boolean>(isDarkStorage());

  const setIsDark = () => {
    console.log("yop");
    setIsDarkContext(!isDark);
  };

  return (
    <AppContext.Provider
      value={{
        isDarkContext: [isDark, setIsDark],
        token: "jklasjdoilawd80sxkjl",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
