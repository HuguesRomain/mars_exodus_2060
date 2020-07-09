import React from "react";
import styled from "styled-components";
import { fontWeight, fontSize, space, breakPoint } from "styles/const";

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

const ContentCount = styled.div`
  padding: ${space.xs} ${space.m};
  z-index: 100;
  @media (max-width: ${breakPoint.tabletPortrait}) {
    padding: ${space.xs} ${space.xs};
  }
`;

const Count = styled.p`
  font-size: ${fontSize.xxl};
  padding: ${space.s};
  @media (max-width: ${breakPoint.tabletPortrait}) {
    font-size: ${fontSize.xl};
  }
`;

const Legend = styled.p`
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.avenir.l};
  @media (max-width: ${breakPoint.tabletPortrait}) {
    font-size: ${fontSize.s};
  }
`;
