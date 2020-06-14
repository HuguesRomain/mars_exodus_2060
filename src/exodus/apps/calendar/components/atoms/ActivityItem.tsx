import React from "react";
import styled from "styled-components";
import {
  isToday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  getDate,
} from "date-fns";

const Item = styled.li`
  list-style-type: none;
`;

type Props = {
  dateEvent: {
    title: string;
    start: Date;
    dateStr: string;
  };
};

export const ActivityItem = ({ dateEvent }: Props) => {
  const day = dateEvent.start;

  const isActual = (() => {
    if (isToday(day)) return "Aujourd'hui";
    if (isTomorrow(day)) return "Demain";
    if (isThisWeek(day)) return "Cette semaine";
    if (isThisMonth(day)) return "Ce mois-ci";
    return "A venir";
  })();

  const theDay = day.toLocaleString("default", { weekday: "long" });

  const theMounth = `${getDate(day)} ${day.toLocaleString("default", {
    month: "long",
  })}`;

  /*   const theHour = dateEvent.dateStr.split(","); */

  return (
    <div>
      <h2>{isActual}</h2>
      <Item>
        <p>{theDay}</p>
        <p>{theMounth}</p>
        <p>{dateEvent.title}</p>
        <p>{dateEvent.dateStr}</p>
      </Item>
    </div>
  );
};
