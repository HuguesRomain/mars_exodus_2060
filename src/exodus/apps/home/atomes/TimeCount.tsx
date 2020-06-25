import React from "react";
import styled from "styled-components";

const ContentCount = styled.div`
  padding: 10px;
`;
const Count = styled.p`
  font-size: 40px;
  padding: 20px;
`;
const Legend = styled.p`
  font-size: 16px;
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
