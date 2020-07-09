import React from "react";
import { ActivityItem } from "../atoms/ActivityItem";
import styled from "styled-components";
import {
  fontSize,
  fontWeight,
  color,
  transitionTime,
  breakPoint,
} from "styles/const";
import { isPast } from "date-fns";
import { AppContext } from "exodus/context";

interface props {
  calendarEvents: Array<Dates>;
}

export const ActivityList = ({ calendarEvents }: props) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;

  return (
    <ActivityContent isDark={isDark}>
      <Title isDark={isDark}>Prochains Evenements</Title>
      <ContentList>
        {calendarEvents &&
          calendarEvents
            .filter(
              (event) => event.date && !isPast(new window.Date(event.date)),
            )
            .map((value, i) => {
              return <ActivityItem key={i} dateEvent={value} />;
            })}
      </ContentList>
    </ActivityContent>
  );
};

const ActivityContent = styled.div<{ isDark: boolean }>`
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackRussian};
  padding: 0 82px 0 48px;
  transition: background-color ${transitionTime};

  @media (max-width: ${breakPoint.tabletPortrait}) {
    padding: 0 48px;
    background-color: transparent;
    width: 100%;
  }

  @media (max-width: 950px) {
    padding: 0 48px;
    background-color: transparent;
    width: 100%;
  }
`;

const ContentList = styled.ul`
  @media (min-width: 950px) {
    height: 100vh;
    overflow-y: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Title = styled.h1<{ isDark: boolean }>`
  font-weight: ${fontWeight.avenir.l};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  font-size: ${fontSize.xl};
`;
