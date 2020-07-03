import React, { useState, useLayoutEffect } from "react";
import { color, transitionTime } from "styles/const";
import { AppContext } from "./context";
import styled from "styled-components";
import {
  isDarkStorage,
  TokenStorage,
  UsernameStorage,
} from "./utils/accessStorage";
import { authAppRouter } from "./internal-router";

export const AppFrame = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDarkContext] = useState<boolean>(isDarkStorage());
  const [token, setToken] = useState<string | null>(TokenStorage());
  const [username, setUsername] = useState<string | null>(UsernameStorage());
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const setIsDark = () => {
    setIsDarkContext(!isDark);
  };

  const setTokenContext = (token: string | null) => {
    localStorage.setItem("token", JSON.stringify(token));
    setToken(token);
    const currentPath = window.document.location.pathname;
    if (currentPath === authAppRouter.login()) {
      window.history.replaceState(null, "", "/app/home");
    }
    document.location.reload(true);
  };

  const setUsernameContext = (username: string | null) => {
    localStorage.setItem("username", JSON.stringify(username));
    setUsername(username);
  };

  useLayoutEffect(() => {
    const updateSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
  }, [windowSize]);

  return (
    <AppContext.Provider
      value={{
        isDarkContext: [isDark, setIsDark],
        tokenContext: [token],
        setTokenContext: [setTokenContext],
        usernameContext: [username],
        setUsernameContext: [setUsernameContext],
        windowSizeContext: [windowSize, setWindowSize],
      }}
    >
      <Backgroundcontext isDark={isDark}>{children}</Backgroundcontext>
    </AppContext.Provider>
  );
};

const Backgroundcontext = styled.div<{ isDark: boolean }>`
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.DarkestBlack};
  transition: ${transitionTime};
  height: 100%;
  z-index: -1000;
`;
