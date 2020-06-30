import React, { useState } from "react";
import { ActivityList } from "./components/molecules/ActivityList";
import { Calendar } from "./components/organismes/Calendar";
import styled from "styled-components";

const Content = styled.main`
  display: flex;
  flex-direction: row-reverse;
`;

const BaseEvent = [
  {
    title: "Entrainement en apesanteur",
    start: new Date(),
    dateStr: "14:00, 18:00",
    status: "Obligatoire",
  },
  {
    title: "Conférence de presse à NYC",
    start: new Date("2020-07-16T10:00:00"),
    dateStr: "10:00, 13:00",
    status: "Obligatoire",
  },
];

const CalendarApp = () => {
  const [calendarEvents] = useState<Dates[]>(BaseEvent);
  return (
    <Content>
      <ActivityList calendarEvents={calendarEvents} />
      <Calendar calendarEvents={calendarEvents} />
    </Content>
  );
};

export default CalendarApp;
