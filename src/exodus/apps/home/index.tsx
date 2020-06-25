import React from "react";
import { Header } from "./organismes/Header";
import styled from "styled-components";

const HomeContent = styled.main`
  height: 200vh;
`;

const HomeApp = () => {
  return (
    <HomeContent>
      <Header />
    </HomeContent>
  );
};

export default HomeApp;
