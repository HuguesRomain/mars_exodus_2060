import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { rem } from "polished";
import { AppFrame } from "./startup";
import AuthApp from "./apps/auth";
import HomeApp from "./apps/home";
import ProfileApp from "./apps/profile";
import CalendarApp from "./apps/calendar";
import SocialApp from "./apps/social";
import {
  authAppRouter,
  homeAppRouter,
  calendarAppRouter,
  socialAppRouter,
  profileAppRouter,
} from "./internal-router";
import { breakPoint } from "styles/const";
import { isMobile } from "exodus/utils/checkWindowSize";
import { MobileHeader } from "exodus/components/molecules/mobileHeader";
import { NavBarContainer } from "exodus/components/navbar/index";
import { authApp } from "./internal-router";

const AppWrapper = styled.div`
  padding: ${rem(69)} 0 ${rem(90)} 0;
  @media (min-width: ${breakPoint.tabletPortrait}) {
    padding: 0 0 0 ${rem(80)};
  }
`;

const currentPath = window.document.location.pathname;

if (currentPath === "/") {
  window.history.replaceState(null, "", "/app/home");
}

const AppWithContext = () => {
  return (
    <AppFrame>
      <MobileHeader />
      {!window.location.pathname.includes(authApp) && <NavBarContainer />}
      <AppWrapper>
        <Router>
          <Switch>
            <Route
              exact
              path={authAppRouter.login()}
              render={() => <AuthApp />}
            />
            <Route
              exact
              path={homeAppRouter.home()}
              render={() => <HomeApp />}
            />
            <Route
              exact
              path={calendarAppRouter.calendar()}
              render={() => <CalendarApp />}
            />
            <Route
              exact
              path={socialAppRouter.social()}
              render={() => <SocialApp />}
            />
            <Route
              exact
              path={
                isMobile(window.innerWidth)
                  ? profileAppRouter.identity("1")
                  : profileAppRouter.profile()
              }
              render={() => <ProfileApp />}
            />
          </Switch>
        </Router>
      </AppWrapper>
    </AppFrame>
  );
};

// You're welcome to Mars Exodus 2060 🌕🚀
export const App = () => <AppWithContext />;
