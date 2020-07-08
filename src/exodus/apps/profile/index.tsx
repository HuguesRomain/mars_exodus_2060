import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { profileAppRouter } from "exodus/internal-router";
import styled from "styled-components";
import { SubNavigation } from "../../components/molecules/subNavigation";
import { IdentityCard } from "./molecules/identityCard";
import { WelcomeMessage } from "./atoms/welcomeMessage";
import { InfoSection } from "./organisms/infoSection";
import { TicketSection } from "./organisms/ticketSection";
import { fontSize, space } from "styles/const";
import {
  isMobileOnly,
  isMobile,
  isMinTabletLandscape,
} from "exodus/utils/checkWindowSize";
import { AppContext } from "exodus/context";
import { Button } from "exodus/components/atoms/button";
import { UserStorage } from "exodus/utils/accessStorage";
import { TimelinePage } from "exodus/components/timeline/timeline";
import { rem } from "polished";

export const apps = [
  {
    label: "Identité",
    uri: profileAppRouter.identity(),
  },
  {
    label: "Billet",
    uri: profileAppRouter.ticket(),
  },
];
const ProfileApp = () => {
  const Context = React.useContext(AppContext);
  const [windowSize] = Context.windowSizeContext;
  const [setToken] = Context.setTokenContext;
  return isMobile(windowSize) ? (
    <ProfileAppMobileStyled>
      {!isMobileOnly(windowSize) && <WelcomeMessage />}
      <Router>
        <SubNavigation datas={apps} />
        <Switch>
          <Route
            exact
            path={profileAppRouter.identity()}
            render={() => <IdentityCard />}
          />
          <Route
            exact
            path={profileAppRouter.ticket()}
            render={() => (
              <Ticket
                alt="your ticket"
                src={`https://symfony-xmt3.frb.io${UserStorage().ticketUrl}`}
              />
            )}
          />
        </Switch>
      </Router>
      <Button
        onClick={() => {
          localStorage.removeItem("token");
          setToken(null);
          document.location.reload(true);
        }}
        iconName={"disconnect"}
        iconSize={15}
      >
        <p style={{ marginRight: space.xs, fontSize: fontSize.s }}>
          Se déconnecter
        </p>
      </Button>
    </ProfileAppMobileStyled>
  ) : (
    <>
      {isMinTabletLandscape(windowSize) && <TimelinePage />}
      <ProfileAppStyled>
        <InfoSection />
        <TicketSection />
      </ProfileAppStyled>
    </>
  );
};

const Ticket = styled.img`
  width: 65vw;
`;

const ProfileAppMobileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const ProfileAppStyled = styled.div`
  display: flex;
  height: 100%;
  padding-top: ${rem(30)};
`;

export default ProfileApp;
