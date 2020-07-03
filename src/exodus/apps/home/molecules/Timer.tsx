import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TimeCount } from "../atoms/TimeCount";
import { font, fontSize, space, fontWeight } from "styles/const";

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

  // setTimeout(() => {
  //   setTime(TimeLeft());
  // }, 1000);

  return (
    <ContentTime>
      <CountTitel>Décollage des navettes Starship dans</CountTitel>
      <Counter>
        {time &&
          time.map((value, i) => {
            return <TimeCount key={i} timeValue={value} />;
          })}
      </Counter>
    </ContentTime>
  );
};

const ContentTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 100;
`;

const CountTitel = styled.p`
  font-family: ${font.avenir};
  font-size: ${fontSize.l};
  padding: ${space.xs};
  font-weight: ${fontWeight.avenir.m};
`;

const Counter = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
