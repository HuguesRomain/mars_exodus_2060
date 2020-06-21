import React from "react";
import styled from "styled-components";
import { rem } from "polished";

type ButtonType = {
  placeholder: string;
  type: "button" | "submit" | "reset";
  children: JSX.Element;
  onClick?: (e: any) => void;
};

const ButtonStyled = styled.button<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #979797;
  border-radius: 50px;
  border: none;
  height: ${rem(50)};
  width: 100%;
  color: white;
`;

export const Button = ({
  type,
  placeholder,
  children,
  onClick,
}: ButtonType) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {placeholder}
      {children && children}
    </ButtonStyled>
  );
};
