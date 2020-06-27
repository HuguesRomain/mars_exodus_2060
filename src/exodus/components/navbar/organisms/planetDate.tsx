import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { rem } from "polished";
import { color, iconSize, space, transitionTime } from "styles/const";
import { AppContext } from "exodus/context";

const PlanetsDateStyled = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) =>
    !props.isDark ? color.light.WhiteSmoke : color.darker.BlackPearl};
  border-radius: 20px;
  transition: ${transitionTime};
`;

const PlanetDateStyled = styled.div<{ isBorder?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${rem(15)};
  border-bottom: ${(props) =>
    props.isBorder && `solid 1px ${color.medium.Manatee}`};
`;

const PlanetInfo = styled.div<{ isDark: boolean }>`
  position: fixed;
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
  border-radius: 0.4em;
  transform: translateX(${rem(95)});
  padding: ${rem(10)};
  z-index: 100000;
  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 1.156em solid transparent;
    border-right-color: ${(props) =>
      !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
    border-left: 0;
    margin-top: -1.156em;
    margin-left: -1.156em;
  }
  transition: ${transitionTime};
`;

const PositionStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space.xs};
`;

const PositionText = styled.p<{ isDark: boolean }>`
  margin-left: ${space.xs};
  color: ${(props) =>
    !props.isDark ? color.medium.Manatee : color.light.PureWhite};
  transition: ${transitionTime};
`;

const Text = styled.p<{ isDark: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
  font-weight: 500;
  transition: ${transitionTime};
`;

const Position = ({ planet }: { planet: string }) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <PositionStyled>
      <Icon name={"pin"} size={iconSize.xs} color={"red"} />
      <PositionText isDark={isDark}>{planet}</PositionText>
    </PositionStyled>
  );
};

type PlanetType = {
  isBorder?: boolean;
  name: string;
  date: string;
  hours: string;
};

export const Popup = ({
  name,
  date,
  hours,
}: {
  name: string;
  date: string;
  hours: string;
}) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <PlanetInfo isDark={isDark}>
      {name === "earth" ? (
        <Position planet={"Terre"} />
      ) : (
        <Position planet={"Mars"} />
      )}
      <Text isDark={isDark}>{date}</Text>
      <Text isDark={isDark}>{hours}</Text>
    </PlanetInfo>
  );
};

const PlanetDate = ({ isBorder, name, date, hours }: PlanetType) => {
  const [displayDate, setDisplayDate] = useState<string | null>();
  return (
    <div>
      {displayDate && <Popup name={name} date={date} hours={hours} />}
      <PlanetDateStyled
        onMouseEnter={() => {
          setDisplayDate(name);
        }}
        onMouseLeave={() => {
          setDisplayDate(null);
        }}
        isBorder={isBorder}
      >
        {name === "earth" ? (
          <Icon name={"earth"} size={iconSize.xl} />
        ) : (
          <Icon name={"mars"} size={iconSize.xl} />
        )}
      </PlanetDateStyled>
    </div>
  );
};

export const PlanetsDate = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <PlanetsDateStyled isDark={isDark}>
      <PlanetDate
        isBorder={true}
        name={"earth"}
        date={"Mer. 10 Juin"}
        hours={"09:48"}
      />
      <PlanetDate name={"mars"} date={"Mer. 10 Juin"} hours={"09:48"} />
    </PlanetsDateStyled>
  );
};
