import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { color } from "styles/const";
import { AppContext } from "exodus/context";

const InputStyled = styled.input<{ isError?: boolean; isDark: boolean }>`
  background: #f8f8f8;
  border-radius: 10px;
  border: none;
  box-sizing: inherit;
  padding: ${rem(20)} ${rem(10)};
  width: 100%;
  min-width: ${rem(295)};
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.BlackPearl};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  border: ${(props) =>
    props.isError ? `1px solid ${color.Lipstick}` : `1px solid transparent`};
  ::placeholder {
    font-size: 14px;
    color: ${color.medium.Manatee};
  }
`;

type InputType = {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  isError?: boolean;
};

export const Input = ({
  type,
  value,
  placeholder,
  onChange,
  isError,
}: InputType) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <InputStyled
      isDark={isDark}
      value={value}
      onChange={onChange && onChange}
      type={type ? type : "text"}
      placeholder={placeholder}
      isError={isError && isError}
    />
  );
};
