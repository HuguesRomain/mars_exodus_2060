import React from "react";
import { ActivityItem } from "../atoms/ActivityItem";
import styled from "styled-components";
import { fontSize, fontWeight, color } from "styles/const";

const ActivityContent = styled.div`
  background-color: #e8ecef;
  padding: 0 82px 0 48px;
`;

const Title = styled.h1`
  font-weight: ${fontWeight.avenir.l};
  color: ${color.darker.LuckyPoint};
  font-size: ${fontSize.xl};
`;

interface props {
  calendarEvents: Array<Dates>;
}

export const ActivityList = ({ calendarEvents }: props) => {
  return (
    <ActivityContent>
      <Title>Prochains Evenements</Title>
      <ul>
        {calendarEvents &&
          calendarEvents.map((value, i) => {
            return <ActivityItem key={i} dateEvent={value} />;
          })}
      </ul>
    </ActivityContent>
  );
};
