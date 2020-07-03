import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Icon, IconName } from "styles/atoms/icons";
import { rem } from "polished";
import { color as globalColors, transitionTime } from "styles/const";
import { AppContext } from "exodus/context";

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

const darkSecondary = css`
  border: solid 1px ${globalColors.light.PureWhite};
  color: ${globalColors.light.PureWhite};

  :hover {
    color: ${globalColors.darker.LuckyPoint};
    background-color: ${globalColors.light.PureWhite};
  }
`;

const PrecomputeButton = styled.div<ButtonPropsStyled>`
  ${(props) =>
    props.type === "secondary"
      ? !props.isDark
        ? secondary
        : darkSecondary
      : primary}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: ${rem(40)};
  min-width: ${rem(45)};
  padding: 0 ${rem(10)};
  cursor: pointer;
  ${(props) => props.styled && props.styled};
  transition: ${transitionTime};
`;

type ButtonProps = {
  onClick?: any;
  type?: "primary" | "secondary";
  children?: React.ReactNode;
  styled?: FlattenSimpleInterpolation;
  style?: React.CSSProperties;
  iconName?: IconName;
  iconSize?: number;
  color?: string;
  href?: string;
};

interface ButtonPropsStyled extends ButtonProps {
  isDark: boolean;
}

export const Button = ({
  type = "primary",
  children,
  iconName,
  iconSize,
  color,
  onClick,
  href,
  styled,
  style,
}: ButtonProps) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <PrecomputeButton
      type={type}
      color={color}
      onClick={onClick}
      href={href}
      style={style}
      styled={styled}
      isDark={isDark}
    >
      {children && children}
      {iconName && (
        <Icon
          color={
            type === "primary"
              ? globalColors.light.PureWhite
              : !isDark
              ? globalColors.darker.LuckyPoint
              : globalColors.light.PureWhite
          }
          strokeColor={globalColors.light.PureWhite}
          name={iconName}
          size={iconSize}
        />
      )}
    </PrecomputeButton>
  );
};
