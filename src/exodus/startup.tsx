import React, { useState } from "react";
import { isDarkStorage } from "styles/const";
import { AppContext } from "./main";

export const AppFrame = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDarkContext] = useState<boolean>(isDarkStorage());
  const [token, setToken] = useState<string | null>(null);

  const setIsDark = () => {
    setIsDarkContext(!isDark);
  };

  return (
    <AppContext.Provider
      value={{
        isDarkContext: [isDark, setIsDark],
        tokenContext: [token, setToken],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
