import React from "react";
import styled from "styled-components";
import { color, space } from "styles/const";
import Ticket from "../../../../styles/assets/pics/ticket.png";
import { rem } from "polished";

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${color.light.Solitude};
  width: 40vw;
`;

const Title = styled.h3`
  font-weight: 600;
  padding: ${space.l} ${space.l};
  font-size: 24px;
  color: ${color.darker.LuckyPoint};
`;

const TicketCard = styled.img`
  width: ${rem(430)};
  padding: 0 0 0 ${space.l};
`;

export const TicketSection = () => {
  return (
    <SectionWrapper>
      <Title>Votre billet</Title>
      <TicketCard src={Ticket} />
    </SectionWrapper>
  );
};
