import React from "react";
import { ActivityItem } from "../atoms/ActivityItem";
import styled from "styled-components";
import { fontSize, fontWeight, color } from "styles/const";
import { AppContext } from "exodus/context";

const ActivityContent = styled.div<{ isDark: boolean }>`
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
  padding: 0 82px 0 48px;
`;

const Title = styled.h1<{ isDark: boolean }>`
  font-weight: ${fontWeight.avenir.l};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  font-size: ${fontSize.xl};
`;

interface props {
  calendarEvents: Array<Dates>;
}

export const ActivityList = ({ calendarEvents }: props) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;

  return (
    <ActivityContent isDark={isDark}>
      <Title isDark={isDark}>Prochains Evenements</Title>
      <ul>
        {calendarEvents &&
          calendarEvents.map((value, i) => {
            return <ActivityItem key={i} dateEvent={value} />;
          })}
      </ul>
    </ActivityContent>
  );
};
