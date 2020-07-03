import styled from "styled-components";
import { rem } from "polished";
import { color, transitionTime, fontSize, space } from "styles/const";

export const Title = styled.h1<{ isDark: boolean }>`
  font-style: normal;
  font-weight: 500;
  font-size: ${fontSize.xl};
  text-align: center;
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
  transition: ${transitionTime};
  margin: 0;
  margin-bottom: ${space.s};
`;

export const Paragraph = styled.p<{ isDark: boolean }>`
  font-size: ${fontSize.s};
  line-height: 17px;
  color: #979797;
  text-align: center;
  max-width: ${rem(320)};
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
  transition: ${transitionTime};
`;

export const FormStyle = styled.form`
  margin: ${rem(20)};
  display: grid;
  grid-row-gap: 20px;
`;

export const RedirectText = styled.p`
  text-decoration-line: underline;
  color: ${color.SunsetOrange};
`;

export const Question = styled.p<{ isDark: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: #454545;
  margin: ${rem(25)} 0;
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
`;
