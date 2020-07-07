import React, { useState } from "react";
import styled from "styled-components";
import { TimeEventType } from "exodus/services/home";
import { Pulser } from "exodus/components/atoms/pulser";
import { rem } from "polished";
import { color, breakPoint } from "styles/const";
import { PopupTimeline } from "../molecule/popup";

export const Step = ({
  isHome,
  event,
  index,
}: {
  isHome: boolean | undefined;
  event: TimeEventType;
  index: number;
}) => {
  const [isPulserHovered, setIsPulserHovered] = useState<boolean>(false);
  const [isPopupHovered, setIsPopupHovered] = useState<boolean>(false);

  const isPopupOpen = (): boolean => {
    if (isPulserHovered === true || isPopupHovered === true) {
      return true;
    } else {
      return false;
    }
  };

  const isDateValide = () => {
    const DateMillisecond = new Date(event.Date);
    const Datenow = new Date();
    return Datenow < DateMillisecond ? true : false;
  };

  return (
    <StepContent>
      {isDateValide() && isPopupOpen() && (
        <PopupTimeline
          onMouseEnter={() => {
            setIsPopupHovered((prevState) => !prevState);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsPopupHovered((prevState) => !prevState);
            }, 200);
          }}
          isPopupOpen={isPopupOpen()}
          event={event}
          isHome={isHome}
        />
      )}
      <StepStyled>
        {index !== 0 && <Line isGrey={!isDateValide()} />}
        <Pulser
          onMouseEnter={() => {
            setIsPulserHovered((prevState) => !prevState);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsPulserHovered((prevState) => !prevState);
            }, 200);
          }}
          isGrey={!isDateValide()}
        />
      </StepStyled>
    </StepContent>
  );
};

const StepStyled = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.span<{ isGrey: boolean | undefined }>`
  height: ${rem(2)};
  width: 10vw;
  background-color: ${(props) =>
    props.isGrey ? color.medium.Manatee : color.SunsetOrange};
  @media (max-width: ${breakPoint.tabletPortrait}) {
    width: 9vw;
  }
`;

const StepContent = styled.div`
  display: flex;
`;
