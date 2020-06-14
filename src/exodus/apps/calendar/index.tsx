import React from "react";
import { ActivityList } from "./components/molecules/ActivityList";
import { Calendar } from "./components/organismes/Calendar";

const CalendarApp = () => {
  return (
    <div>
      <ActivityList />
      <Calendar />
    </div>
  );
};

export default CalendarApp;
