import React, { useState, useEffect } from "react";
import { ActivityList } from "./components/molecules/ActivityList";
import { Calendar } from "./components/organismes/Calendar";
import styled from "styled-components";
import { TimelinePage } from "exodus/components/timeline/timeline";
import { AppContext } from "exodus/context";
import { breakPoint } from "styles/const";
import { isCalendar, isMinTabletLandscape } from "exodus/utils/checkWindowSize";
import { GetCalendar } from "exodus/services/clendar/calendar";

const CalendarApp = () => {
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;
  const [calendarEvents, setCalendarEvents] = useState<Dates[]>([]);

  useEffect(() => {
    GetCalendar().then((events) => setCalendarEvents(events));
  }, []);

  return isCalendar(windowSize) ? (
    <Content>
      {isMinTabletLandscape(windowSize) && <TimelinePage />}
      <ActivityList calendarEvents={calendarEvents} />
    </Content>
  ) : (
    <Content>
      {isMinTabletLandscape(windowSize) && <TimelinePage />}
      <ActivityList calendarEvents={calendarEvents} />
      <Calendar calendarEvents={calendarEvents} />
    </Content>
  );
};

const Content = styled.main`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: ${breakPoint.tabletPortrait}) {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

export default CalendarApp;
