import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TimeCount } from "../atomes/TimeCount";

const ContentTime = styled.div`
  text-align: center;
`;
const CountTitel = styled.p`
  font-size: 18px;
  padding: 10px;
`;
const Counter = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

type TimeType = {
  content: number;
  label: string;
};

function TimeLeft(): TimeType[] {
  const difference =
    new Date("2020-07-27T10:00:00").getTime() - new Date().getTime();
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / 1000 / 60) % 60);
  let seconds = Math.floor((difference / 1000) % 60);

  return [
    { content: days, label: "jours" },
    { content: hours, label: "heures" },
    { content: minutes, label: "minutes" },
    { content: seconds, label: "secondes" },
  ];
}

export const Timer = () => {
  const [time, setTime] = useState<TimeType[]>();

  useEffect(() => {
    setTimeout(() => {
      setTime(TimeLeft());
    }, 1000);
  });

  return (
    <ContentTime>
      <CountTitel>Décollage des navettes Starship dans</CountTitel>
      <Counter>
        {time &&
          time.map((value) => {
            return <TimeCount key={value.label} timeValue={value} />;
          })}
      </Counter>
    </ContentTime>
  );
};
