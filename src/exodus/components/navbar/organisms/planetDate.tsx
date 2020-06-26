import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "styles/atoms/icons";
import { rem } from "polished";
import { color, iconSize, space } from "styles/const";

const PlanetsDateStyled = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  background-color: ${color.light.WhiteSmoke};
  border-radius: 20px;
`;

const PlanetDateStyled = styled.div<{ isBorder?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${rem(15)};
  border-bottom: ${(props) =>
    props.isBorder && `solid 1px ${color.medium.Manatee}`};
`;

const PlanetInfo = styled.div`
  position: fixed;
  background: ${color.light.PureWhite};
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
    border-right-color: ${color.light.PureWhite};
    border-left: 0;
    margin-top: -1.156em;
    margin-left: -1.156em;
  }
`;

const PositionStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space.xs};
`;

const PositionText = styled.p`
  margin-left: ${space.xs};
  color: #848897;
`;

const Text = styled.p`
  color: ${color.darker.LuckyPoint};
  font-weight: 500;
`;

const Position = ({ planet }: { planet: string }) => {
  return (
    <PositionStyled>
      <Icon name={"pin"} size={iconSize.xs} color={"red"} />
      <PositionText>{planet}</PositionText>
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
  return (
    <PlanetInfo>
      {name === "earth" ? (
        <Position planet={"Terre"} />
      ) : (
        <Position planet={"Mars"} />
      )}
      <Text>{date}</Text>
      <Text>{hours}</Text>
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
  return (
    <PlanetsDateStyled>
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
