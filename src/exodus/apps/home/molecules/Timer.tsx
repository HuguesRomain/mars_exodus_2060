import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ContentTime = styled.div`
  text-align: center;
`;
const TimerCount = styled.p`
  font-size: 40px;
`;

export const Timer = () => {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setTime(TimeLeft());
    }, 1000);
  });

  const TimeLeft = () => {
    const difference =
      new Date("2020-07-27T10:00:00").getTime() - new Date().getTime();
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
  };
  return (
    <ContentTime>
      <h1>Décollage des navettes Starship</h1>
      <TimerCount>{time}</TimerCount>
      <p> Jours Heures Minutes Secondes</p>
    </ContentTime>
  );
};
