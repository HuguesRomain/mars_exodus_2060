import React from "react";
import { ActivityItem } from "../atoms/ActivityItem";
import styled from "styled-components";

const ActivityContent = styled.div`
  background-color: #e8ecef;
  padding: 0 82px 0 48px;
`;
const Title = styled.h1`
  font-size: 24px;
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
          calendarEvents.map((value) => {
            return <ActivityItem key={value.title} dateEvent={value} />;
          })}
      </ul>
    </ActivityContent>
  );
};
