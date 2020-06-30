import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Icon, IconName } from "styles/atoms/icons";
import { rem } from "polished";
import { color as globalColors } from "styles/const";

const primary = css`
  background-color: ${globalColors.SunsetOrange};
  color: ${globalColors.light.PureWhite};

  :hover {
    background-color: ${globalColors.Alizarin};
  }
`;

const secondary = css`
  border: solid 1px ${globalColors.darker.LuckyPoint};
  color: ${globalColors.darker.LuckyPoint};

  :hover {
    color: ${globalColors.light.PureWhite};
    background-color: ${globalColors.darker.LuckyPoint};
  }
`;

const PrecomputeButton = styled.div<ButtonProps>`
  ${(props) => (props.type === "secondary" ? secondary : primary)}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: ${rem(40)};
  min-width: ${rem(45)};
  padding: 0 ${rem(10)};
  cursor: pointer;
  ${(props) => props.styled && props.styled}
`;

type ButtonProps = {
  onClick?: any;
  type?: "primary" | "secondary";
  children?: React.ReactNode;
  styled?: FlattenSimpleInterpolation;
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
  styled,
  style,
}: ButtonProps) => {
  return (
    <PrecomputeButton
      type={type}
      color={color}
      onClick={onClick}
      href={href}
      style={style}
      styled={styled}
    >
      {children && children}
      {iconName && (
        <Icon
          color={
            type === "primary"
              ? globalColors.light.PureWhite
              : globalColors.darker.LuckyPoint
          }
          strokeColor={globalColors.light.PureWhite}
          name={iconName}
          size={14}
        />
      )}
    </PrecomputeButton>
  );
};
