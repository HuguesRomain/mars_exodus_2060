import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { rem } from "polished";
import { isMobileOnly } from "react-device-detect";
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
import { isMobile } from "react-device-detect";

export const AppContext = React.createContext(null);

const AppWrapper = styled.div`
  padding: ${isMobileOnly ? `${rem(69)} 0 ${rem(90)} 0` : `0 0 0 ${rem(100)}`};
`;

const AppWithContext = () => {
  return (
    <AppFrame>
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
                isMobile
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
export const App = () => <AppWithContext App={App} />;
