import styled from "styled-components";
import {
  font,
  fontSize,
  fontWeight,
  color,
  transitionTime,
  space,
} from "styles/const";

export const HomeTitle = styled.h2<{ isDark: boolean }>`
  font-family: ${font.avenir};
  font-size: ${fontSize.xl};
  font-weight: ${fontWeight.avenir.m};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  transition: ${transitionTime};
  margin-bottom: ${space.m};
`;
