import React from "react";
import styled, { css } from "styled-components";
import { TimeEventType } from "exodus/services/home";
import { rem } from "polished";
import { Link } from "react-router-dom";
import { Button } from "exodus/components/atoms/button";
import { space, fontSize, color, transitionTime } from "styles/const";
import { AppContext } from "exodus/context";
import { calendarAppRouter } from "exodus/internal-router";

export const PopupTimeline = ({
  onMouseEnter,
  onMouseLeave,
  isPopupOpen,
  event,
  isHome,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isPopupOpen: boolean;
  event: TimeEventType;
  isHome: boolean | undefined;
}) => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <PopupTimelineStyled
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      isPopupOpen={isPopupOpen}
      isDark={isDark}
      isHome={isHome}
    >
      <Image image={`https://symfony-xmt3.frb.io${event.picture}`}>
        <ContentImage isDark={isDark} />
      </Image>
      <TextContent>
        <Title isDark={isDark}>{event.title}</Title>
        <Text>{event.text}</Text>
        <Link to={calendarAppRouter.calendar()}>
          <Button
            styled={customButtom}
            type={"secondary"}
            iconName={"calendar"}
          >
            <p style={{ marginLeft: rem(2) }}>Accéder au calendrier</p>
          </Button>
        </Link>
      </TextContent>
    </PopupTimelineStyled>
  );
};

const customButtom = css`
  flex-direction: row-reverse;
  margin: ${rem(10)} 0;
`;

const PopupTimelineStyled = styled.div<{
  isDark: boolean;
  isPopupOpen: boolean;
  isHome: boolean | undefined;
}>`
  position: absolute;
  z-index: 10;
  width: ${rem(288)};
  height: ${rem(364.28)};
  margin-top: ${rem(30)};
  transform: ${(props) =>
    props.isHome ? "translateX(50px) translateY(-400px);" : "0"};
  background-color: red;
  transition: height 0.3s;
  border-radius: 8px;
  background-color: ${(props) =>
    !props.isDark ? color.light.PureWhite : color.darker.BlackPearl};
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid
    ${(props) =>
      !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
`;

const Image = styled.div<{ image: string }>`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 45%;
  width: 100%;
  border-radius: 8px;
`;

const ContentImage = styled.div<{ isDark: boolean }>`
  z-index: 1000000;
  display: flex;
  align-items: flex-end;
  width: inherit;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    ${(props) =>
        !props.isDark ? color.light.PureWhite : color.darker.BlackPearl}
      100%
  );
  transition: height 0.3s;
`;

const Title = styled.p<{ isDark: boolean }>`
  color: ${(props) =>
    !props.isDark ? color.darker.BlackPearl : color.light.PureWhite};
  transition: ${transitionTime};
  max-width: ${rem(201)};
  text-align: center;
  font-size: ${fontSize.l};
`;

const Text = styled.p`
  font-size: ${fontSize.s};
  margin-top: ${space.xs};
  color: ${color.medium.Manatee};
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${rem(240)};
`;
