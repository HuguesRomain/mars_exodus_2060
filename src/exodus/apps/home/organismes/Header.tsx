import React from "react";
import first from "../../../../assets/images/hero-1.png";
import second from "../../../../assets/images/back.jpg";
import styled from "styled-components";

const ContentHeader = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 455px;
  border: 1px solid #222;
`;
const FistImage = styled.img`
  object-fit: cover;
  position: absolute;
  z-index: 2;
  width: 100%;
  bottom: 0;
`;
const SecondImage = styled.img`
  object-fit: cover;
  position: fixed;
  width: 100%;
`;

export const Header = () => {
  return (
    <ContentHeader>
      <FistImage src={first} alt="" />
      <SecondImage src={second} alt="" />
    </ContentHeader>
  );
};
