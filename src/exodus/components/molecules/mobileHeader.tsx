import React, { useState } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Icon } from "styles/atoms/icons";
import { LabelOverlay } from "../navbar";
import { ThemePicker } from "../navbar/atoms/themePicker";
import { color } from "styles/const";

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: ${rem(69)};
  background-color: ${color.light.PureWhite};
  border-radius: 0px 0px 20px 20px;
`;

const PopupStyled = styled.div`
  position: fixed;
  background: ${color.light.PureWhite};
  border-radius: 0.4em;
  transform: translateX(${rem(-60)}) translateY(${rem(15)});
  padding: ${rem(10)};
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 70%;
    width: 0;
    height: 0;
    border: 1.156em solid transparent;
    border-bottom-color: ${color.light.PureWhite};
    border-top: 0;
    margin-left: -1.156em;
    margin-top: -1.156em;
  }
`;

const Choise = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(5)};
`;

const Text = styled.p`
  color: ${color.medium.Manatee};
  font-size: 14px;
  margin-left: ${rem(5)};
`;

const Popup = () => {
  return (
    <PopupStyled>
      <Choise>
        <Icon name={"earth"} size={"32"} />
        <Text>Terre</Text>
      </Choise>
      <Choise>
        <Icon name={"mars"} size={"32"} />
        <Text>Mars</Text>
      </Choise>
    </PopupStyled>
  );
};

export const MobileHeader = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  return (
    <WrapperHeader>
      <ThemePicker />
      <LabelOverlay>Mercredi 10 Juin 09:48</LabelOverlay>
      <div
        onClick={() => {
          displayMenu ? setDisplayMenu(false) : setDisplayMenu(true);
        }}
        onMouseEnter={() => {
          setDisplayMenu(true);
        }}
        onMouseLeave={() => {
          setDisplayMenu(false);
        }}
      >
        <Icon name={"earth"} size={"32"} />
        {displayMenu && <Popup />}
      </div>
    </WrapperHeader>
  );
};
