import React, { useState } from "react";
import styled from "styled-components";
import { TimeEventType } from "exodus/services/home";
import { Pulser } from "exodus/components/atoms/pulser";
import { rem } from "polished";
import { color, breakPoint } from "styles/const";
import { PopupTimeline } from "../molecule/popup";

export const Step = ({
  event,
  index,
}: {
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
    return Date.now() < 1230403 ? true : false;
  };

  return (
    <StepContent>
      {isPopupOpen() && (
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
        />
      )}
      <StepStyled>
        {index !== 0 && <Line isGrey={isDateValide()} />}
        <Pulser
          onMouseEnter={() => {
            setIsPulserHovered((prevState) => !prevState);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsPulserHovered((prevState) => !prevState);
            }, 200);
          }}
          isGrey={isDateValide()}
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
  min-width: 10vw;
  background-color: ${(props) =>
    props.isGrey ? color.medium.Manatee : color.SunsetOrange};
  /* @media (max-width: ${breakPoint.tabletPortrait}) {
    width: 9vw;
  } */
`;

const StepContent = styled.div`
  display: flex;
`;

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2000000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;
