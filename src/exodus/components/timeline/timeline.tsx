import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTimeEvent, TimeEventType } from "exodus/services/home";
import { UserStorage } from "exodus/utils/accessStorage";
import { Step } from "./organisms/step";
import { breakPoint, space } from "styles/const";
import { rem } from "polished";
import Hero from "../../../styles/assets/pics/hero/hero_7.jpg";
import { PopupTimeline } from "./molecule/popup";

export const Timeline = ({ isHome }: { isHome?: boolean }) => {
  const [events, setEvents] = useState<TimeEventType[]>([]);

  useEffect(() => {
    getTimeEvent().then((resp) => setEvents(resp["hydra:member"]));
  }, []);

  return (
    <TimelineStyle isHome={isHome}>
      {events.map((event, i) => (
        <Step key={i} event={event} index={i} />
      ))}
    </TimelineStyle>
  );
};

const TimelineStyle = styled.div<{ isHome?: boolean }>`
  display: flex;
  z-index: 1000000;
  height: ${rem(50)};
  overflow: hidden;
  margin: 0 0 0 ${space.l};
  transform: ${(props) => (props.isHome ? "translateY(-20px)" : "none")};
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
  width: 95vw;
  border-bottom-right-radius: 80px;
  z-index: 10000;
`;
