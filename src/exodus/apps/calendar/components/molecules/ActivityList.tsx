import React from "react";
import { ActivityItem } from "../atoms/ActivityItem";

interface props {
  calendarEvents: Array<Dates>;
}

export const ActivityList = ({ calendarEvents }: props) => {
  return (
    <div>
      <h1>Prochains Evenements</h1>
      <ul>
        {calendarEvents &&
          calendarEvents.map((value) => {
            return <ActivityItem key={value.title} dateEvent={value} />;
          })}
      </ul>
    </div>
  );
};
