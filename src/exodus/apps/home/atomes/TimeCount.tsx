import React from "react";
import styled from "styled-components";
import { fontWeight, fontSize, space } from "styles/const";

const ContentCount = styled.div`
  padding: ${space.xs};
`;

const Count = styled.p`
  font-size: ${fontSize.xxl};
  padding: ${space.s};
`;

const Legend = styled.p`
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.avenir.l};
`;

type Props = {
  timeValue: {
    content: number;
    label: string;
  };
};

export const TimeCount = ({ timeValue }: Props) => {
  return (
    <ContentCount>
      <Count>{timeValue.content}</Count>
      <Legend>{timeValue.label}</Legend>
    </ContentCount>
  );
};
