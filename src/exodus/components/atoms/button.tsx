import React from "react";
import styled, { css } from "styled-components";
import { Icon, IconName } from "styles/atoms/icons";
import { rem } from "polished";
import { color } from "styles/const";

const primary = css`
  background-color: ${color.SunsetOrange};
  color: ${color.light.PureWhite};

  :hover {
    background-color: ${color.Alizarin};
  }
`;

const secondary = css`
  border: solid 1px ${color.darker.LuckyPoint};
  color: ${color.darker.LuckyPoint};

  :hover {
    color: ${color.light.PureWhite};
    background-color: ${color.darker.LuckyPoint};
  }
`;

const PrecomputeButton = styled.div<ButtonProps>`
  ${(props) => (props.type === "secondary" ? secondary : primary)}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  min-height: ${rem(40)};
  min-width: ${rem(134)};
  padding: 0 ${rem(10)};
  cursor: pointer;
`;

type ButtonProps = {
  onClick?: any;
  type?: "primary" | "secondary";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  iconName?: IconName;
  color?: string;
  href?: string;
};

export const Button = ({
  type = "primary",
  children,
  iconName,
  color,
  onClick,
  href,
  style,
}: ButtonProps) => {
  return (
    <PrecomputeButton
      type={type}
      color={color}
      onClick={onClick}
      href={href}
      style={style}
    >
      {children && children}
      {iconName && <Icon name={iconName} size={14} />}
    </PrecomputeButton>
  );
};
