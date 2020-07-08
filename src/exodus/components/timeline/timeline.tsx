import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTimeEvent, TimeEventType } from "exodus/services/home";
import { Step } from "./organisms/step";
import { space } from "styles/const";
import { rem } from "polished";
import Hero from "../../../styles/assets/pics/hero/hero_7.jpg";

export const Timeline = ({ isHome }: { isHome?: boolean }) => {
  const [events, setEvents] = useState<TimeEventType[]>([]);

  useEffect(() => {
    getTimeEvent().then((resp) => setEvents(resp["hydra:member"]));
  }, []);

  return (
    <TimelineStyle isHome={isHome}>
      {events.map((event, i) => (
        <Step isHome={isHome} key={i} event={event} index={i} />
      ))}
    </TimelineStyle>
  );
};

const TimelineStyle = styled.div<{ isHome?: boolean }>`
  position: ${(props) => (props.isHome ? "relative" : "none")};
  display: flex;
  z-index: 1000000;
  height: ${(props) => (props.isHome ? rem(500) : "none")};
  overflow: hidden;
  margin: 0 0 0 ${space.l};
  padding-top: ${rem(10)};
  transform: ${(props) => (props.isHome ? "translateY(-540px)" : "none")};
  align-items: flex-end;
`;

export const TimelinePage = () => {
  return (
    <Background>
      <Timeline isHome={false} />
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  background-image: url(${Hero});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  height: ${rem(68)};
  width: 97vw;
  border-bottom-right-radius: 80px;
  z-index: 10000;
`;
