import React from "react";
import styled from "styled-components";
import { color, space, fontSize, transitionTime } from "styles/const";
import { rem } from "polished";
import { AppContext } from "exodus/context";
import { UserStorage } from "exodus/utils/accessStorage";

export const TicketSection = () => {
  const Context = React.useContext(AppContext);
  const [isDark] = Context.isDarkContext;
  return (
    <SectionWrapper isDark={isDark}>
      <Title isDark={isDark}>Votre billet</Title>
      <TicketCard
        src={`https://symfony-xmt3.frb.io${UserStorage().ticketUrl}`}
      />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    !props.isDark ? color.light.Solitude : color.darker.BlackPearl};
  width: 40vw;
  padding-top: ${rem(20)};
  transition: ${transitionTime};
`;

const Title = styled.h3<{ isDark: boolean }>`
  font-weight: 600;
  padding: ${space.l} ${space.l};
  font-size: ${fontSize.xl};
  color: ${(props) =>
    !props.isDark ? color.darker.LuckyPoint : color.light.PureWhite};
  transition: ${transitionTime};
`;

const TicketCard = styled.img`
  width: ${rem(450)};
  height: ${rem(630)};
  padding: 0 0 0 ${space.l};
`;
