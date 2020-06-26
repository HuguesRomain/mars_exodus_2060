import React from "react";
import styled from "styled-components";
import {
  isToday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  getDate,
} from "date-fns";
import { space } from "styles/const";

const Item = styled.li`
  margin: ${space.s} 0 0;
  list-style-type: none;
  background-color: white;
  min-width: 210px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(153, 155, 168, 0.15);
`;
const ContentItem = styled.div`
  margin: ${space.m} 0 0;
`;

type Props = {
  dateEvent: Dates;
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
    <ContentItem>
      <h2>{isActual}</h2>
      <Item>
        <p>{dateEvent.status}</p>
        <p>{theDay}</p>
        <p>{theMounth}</p>
        <p>{dateEvent.title}</p>
        <p>{dateEvent.dateStr}</p>
      </Item>
    </ContentItem>
  );
};
