import React from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import {
  isToday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  getDate,
} from "date-fns";
import { space, color, fontSize, transitionTime } from "styles/const";
import { rem } from "polished";
import { AppContext } from "exodus/context";

type Props = {
  dateEvent: Dates;
};

export const ActivityItem = ({ dateEvent }: Props) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  const day = dateEvent.start;

  const isActual = (() => {
    if (isToday(day)) return "Aujourd'hui";
    if (isTomorrow(day)) return "Demain";
    if (isThisWeek(day)) return "Cette semaine";
    if (isThisMonth(day)) return "Ce mois-ci";
    return "A venir";
  })();

  const theDay = day.toLocaleString("default", { weekday: "long" });

  const theMounth = `${getDate(day)} ${day.toLocaleString("default", {
    month: "long",
  })}`;

  /*   const theHour = dateEvent.dateStr.split(","); */

  return (
    <ContentItem>
      <FromActual isDark={isDark}>{isActual}</FromActual>
      <Item isDark={isDark}>
        <Status isDark={isDark}>{dateEvent.status}</Status>
        <Day>{theDay}</Day>
        <Date isDark={isDark}>{theMounth}</Date>
        <Description isDark={isDark}>{dateEvent.title}</Description>
        <FromTo>
          <Icon color={color.medium.Manatee} name={"clock"} size={fontSize.m} />
          <p>{dateEvent.dateStr}</p>
        </FromTo>
      </Item>
    </ContentItem>
  );
};

const FromActual = styled.h2<{ isDark: boolean }>`
  font-size: ${fontSize.m};
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
`;

const ContentItem = styled.div`
  margin: ${space.m} 0 0;
`;

const Item = styled.li<{ isDark: boolean }>`
  position: relative;
  margin: ${space.s} 0 0;
  list-style-type: none;
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
  min-width: 210px;
  padding: ${space.xs} ${space.m};
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(153, 155, 168, 0.15);
  overflow: hidden;
  transition: background-color ${transitionTime};

  &:before {
    content: "";
    height: 100%;
    width: 11px;
    background-color: #f98971;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const Status = styled.p<{ isDark: boolean }>`
  padding: ${space.xs};
  background-color: ${(props) =>
    !props.isDark ? color.transparent.SunsetOrangeTrans : color.SunsetOrange};
  color: ${(props) =>
    !props.isDark ? color.SunsetOrange : color.light.PureWhite};
  border-radius: ${rem(8)};
  font-size: ${fontSize.xs};
  width: fit-content;
  transition: background-color ${transitionTime};
`;
const Day = styled.p`
  color: ${color.medium.Manatee};
  font-size: ${fontSize.s};
  margin-top: ${space.xs};
`;
const Date = styled.p<{ isDark: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  font-size: ${fontSize.xl};
  margin-top: ${space.xs};
`;
const Description = styled.p<{ isDark: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  font-size: ${fontSize.s};
  margin-top: ${space.xs};
`;
const FromTo = styled.div`
  display: flex;
  color: ${color.medium.Manatee};
  margin-top: ${space.xs};

  p {
    margin-left: ${space.xs};
  }
`;
