import React, { useState, useEffect } from "react";
import { ActivityList } from "./components/molecules/ActivityList";
import { Calendar } from "./components/organismes/Calendar";
import styled from "styled-components";
import { breakPoint } from "styles/const";
import { AppContext } from "exodus/context";
import { isCalendar } from "exodus/utils/checkWindowSize";
import { GetCalendar } from "exodus/services/clendar/calendar";

const Content = styled.main`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  @media (max-width: ${breakPoint.tabletPortrait}) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`;

const CalendarApp = () => {
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;
  const [calendarEvents, setCalendarEvents] = useState<Dates[]>([]);

  useEffect(() => {
    GetCalendar().then((events) => setCalendarEvents(events));
  }, []);

  return isCalendar(windowSize) ? (
    <Content>
      <ActivityList calendarEvents={calendarEvents} />
    </Content>
  ) : (
    <Content>
      <ActivityList calendarEvents={calendarEvents} />
      <Calendar calendarEvents={calendarEvents} />
    </Content>
  );
};

export default CalendarApp;
