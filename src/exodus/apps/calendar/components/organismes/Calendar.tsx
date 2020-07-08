import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import frLocale from "@fullcalendar/core/locales/fr";
import styled, { css } from "styled-components";
import { Swipper } from "exodus/components/atoms/swipper";
import { Button } from "../../../../components/atoms/button";
import { AppContext } from "exodus/context";

import "./calendar.css";
import {
  fontWeight,
  color,
  fontSize,
  space,
  transitionTime,
  breakPoint,
} from "styles/const";

interface props {
  calendarEvents: Array<Dates>;
}

export const Calendar = ({ calendarEvents }: props) => {
  const CustomSlider = useRef<any>(null);
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;

  const next = () => {
    let calendarApi = CustomSlider.current.getApi();
    calendarApi.next();
  };
  const previous = () => {
    let calendarApi = CustomSlider.current.getApi();
    calendarApi.prev();
  };

  const today = () => {
    let calendarApi = CustomSlider.current.getApi();
    calendarApi.today();
  };

  return (
    <ClendarContent isDark={isDark}>
      <Title isDark={isDark}>Calendrier de l’expédition</Title>
      <CalendarInterraction>
        <Button styled={ButtonStyled} onClick={today}>
          Aujourd'hui
        </Button>
        <Swipper LeftArrow={previous} RigthArrow={next} />
      </CalendarInterraction>
      <FullCalendar
        ref={CustomSlider}
        defaultView="dayGridMonth"
        locales={[frLocale]}
        locale={"fr"}
        header={{
          left: "title",
          center: "",
          right: "",
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={calendarEvents}
      />
    </ClendarContent>
  );
};

const ClendarContent = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.DarkestBlack};
  transition: background-color ${transitionTime};
  @media (max-width: ${breakPoint.tabletPortrait}) {
    height: 500px;
  }
`;

const Title = styled.h1<{ isDark: boolean }>`
  font-weight: ${fontWeight.avenir.l};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  font-size: ${fontSize.xl};
  margin: ${space.xl} 0 0 50px;
`;

const CalendarInterraction = styled.div`
  display: flex;
  justify-content: flex-end;
  transform: translate(0, 55px);
  margin-right: ${space.m};
`;

const ButtonStyled = css`
  margin-right: ${space.m};
`;
