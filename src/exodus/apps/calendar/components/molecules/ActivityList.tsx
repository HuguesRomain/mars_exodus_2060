import React, { useEffect, useState } from "react";
import { ActivityItem } from "../atoms/ActivityItem";
import Bus from "../../../../services/Bus";

type Props = {
  title: string;
  start: Date;
  dateStr: string;
};

export const ActivityList = () => {
  const [alldates, setAllDates] = useState<Props[]>([]);

  useEffect(() => {
    Bus.once("EventDates", setAllDates);
  }, []);

  return (
    <div>
      <h1>Prochains Evenements</h1>
      <ul>
        {alldates &&
          alldates.map((value) => {
            return <ActivityItem key={value.title} dateEvent={value} />;
          })}
      </ul>
    </div>
  );
};
