import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { profileAppRouter } from "exodus/internal-router";
import styled from "styled-components";
import { isMobileOnly, isMobile } from "react-device-detect";
import { ProfileNavigation } from "./molecules/navigation";
import { IdentityCard } from "./molecules/identityCard";
import { Button } from "exodus/components/atoms/button";
import { rem } from "polished";
import Ticket from "../../../styles/assets/pics/ticket.png";
import { WelcomeMessage } from "./atoms/welcomeMessage";
import { InfoSection } from "./organisms/infoSection";
import { TicketSection } from "./organisms/ticketSection";

const ProfileAppMobileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileAppStyled = styled.div`
  display: flex;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  font-size: 12px;
  padding: ${rem(10)} 0;
`;

const ProfileApp = () => {
  return isMobile ? (
    <ProfileAppMobileStyled>
      {!isMobileOnly && <WelcomeMessage />}
      <Router>
        <ProfileNavigation />
        <Switch>
          <Route
            exact
            path={profileAppRouter.identity("1")}
            render={() => <IdentityCard />}
          />
          <Route
            exact
            path={profileAppRouter.ticket("1")}
            render={() => <img alt="your ticket" src={Ticket} />}
          />
        </Switch>
      </Router>
      <ButtonWrapper>
        <Button
          style={{ marginRight: rem(10) }}
          type={"primary"}
          iconName={"disconnect"}
        >
          Se déconnecter
        </Button>
      </ButtonWrapper>
    </ProfileAppMobileStyled>
  ) : (
    <ProfileAppStyled>
      <InfoSection />
      <TicketSection />
    </ProfileAppStyled>
  );
};

export default ProfileApp;
