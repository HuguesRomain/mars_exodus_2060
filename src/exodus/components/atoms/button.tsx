import React from "react";
import styled, { css } from "styled-components";
import { Icon, IconName } from "styles/atoms/icons";
import { rem } from "polished";
import { color as globalColors, space } from "styles/const";

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
  width: 100%;
  height: ${rem(40)};
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
          style={{ marginLeft: space.xs }}
        />
      )}
    </PrecomputeButton>
  );
};
