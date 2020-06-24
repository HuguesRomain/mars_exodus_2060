import React from "react";
import styled from "styled-components";
import { color, space } from "styles/const";

const LabeledInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${color.SunsetOrange};
  margin-bottom: ${space.xs};
  font-size: 12px;
`;

const Value = styled.p`
  color: ${color.darker.LuckyPoint};
  font-size: 18px;
`;

export const LabeledInfo = ({
  title,
  value,
}: {
  title: string;
  value: string | JSX.Element;
}) => {
  return (
    <LabeledInfoStyled>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </LabeledInfoStyled>
  );
};
