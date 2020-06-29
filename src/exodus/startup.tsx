import React, { useState, useLayoutEffect } from "react";
import { isDarkStorage, color, transitionTime } from "styles/const";
import { AppContext } from "./context";
import styled from "styled-components";

export const AppFrame = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDarkContext] = useState<boolean>(isDarkStorage());
  const [token, setToken] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const setIsDark = () => {
    setIsDarkContext(!isDark);
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
        tokenContext: [token, setToken],
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
