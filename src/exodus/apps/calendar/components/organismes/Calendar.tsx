import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import frLocale from "@fullcalendar/core/locales/fr";
import styled from "styled-components";
/* import { isPast } from "date-fns"; */

import "./test.css";
import { fontWeight, color, fontSize } from "styles/const";

const ClendarContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    padding: 0 50px;
  }
`;

interface props {
  calendarEvents: Array<Dates>;
}

const Title = styled.h1`
  font-weight: ${fontWeight.avenir.l};
  color: ${color.darker.LuckyPoint};
  font-size: ${fontSize.xl};
`;

export const Calendar = ({ calendarEvents }: props) => {
  /* const [calendarEvents, setcalendarEvents] = useState<Dates[]>(
    BaseEvent,
  );

  useEffect(() => {
    Bus.emit("EventDates", calendarEvents);
  }, []);

  const handleDateClick = (arg: EventType) => {
    if (isPast(arg.date)) return;
    setcalendarEvents(
      calendarEvents.concat({
        title: "New Event",
        start: arg.date,
        allDay: arg.allDay,
      })
    );
  }; */

  return (
    <ClendarContent>
      <Title>Calendrier de l’expédition</Title>
      <FullCalendar
        defaultView="dayGridMonth"
        locales={[frLocale]}
        locale={"fr"}
        /* header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }} */
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={calendarEvents}
        /* dateClick={handleDateClick} */
      />
    </ClendarContent>
  );
};
