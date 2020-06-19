import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { rem } from "polished";

const InputStyled = styled.input`
  background: #f8f8f8;
  border-radius: 20px;
  border: none;
  padding: ${rem(20)} ${rem(50)};
  width: 100%;
`;

type InputType = {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ placeholder, onChange }: InputType) => {
  return (
    <InputStyled onChange={onChange} type="text" placeholder={placeholder} />
  );
};
