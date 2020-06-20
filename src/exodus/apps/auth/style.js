import styled from "styled-components";
import { rem } from "polished";

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: #979797;
  text-align: center;
  max-width: ${rem(320)};
`;

export const FormStyle = styled.form`
  margin: ${rem(20)};
  display: grid;
  grid-row-gap: 20px;
`;

export const RedirectText = styled.p`
  text-decoration-line: underline;
`;

export const Question = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #454545;
  margin: ${rem(25)} 0;
`;
