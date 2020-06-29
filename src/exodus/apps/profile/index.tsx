import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { profileAppRouter } from "exodus/internal-router";
import styled from "styled-components";
import { SubNavigation } from "../../components/molecules/subNavigation";
import { IdentityCard } from "./molecules/identityCard";
import { Button } from "exodus/components/atoms/button";
import { rem } from "polished";
import Ticket from "../../../styles/assets/pics/ticket.png";
import { WelcomeMessage } from "./atoms/welcomeMessage";
import { InfoSection } from "./organisms/infoSection";
import { TicketSection } from "./organisms/ticketSection";
import { fontSize, space } from "styles/const";
import { isMobileOnly, isMobile } from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/context";

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
  font-size: ${fontSize.xs};
  padding: ${rem(10)} 0;
`;

export const apps = [
  {
    label: "Identité",
    uri: profileAppRouter.identity("1"),
  },
  {
    label: "Billet",
    uri: profileAppRouter.ticket("1"),
  },
];
const ProfileApp = () => {
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;
  return isMobile(windowSize) ? (
    <ProfileAppMobileStyled>
      {!isMobileOnly(windowSize) && <WelcomeMessage />}
      <Router>
        <SubNavigation datas={apps} />
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
          style={{ marginRight: space.xs }}
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
