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
import { TokenStorage, UsernameStorage } from "./utils/accessStorage";
import { GetUserByName } from "./services/social/social.hook";
import { Landing } from "./components/pages/landing";

const AppWrapper = styled.div<{ token: string | null }>`
  padding: ${rem(69)} 0 ${rem(90)} 0;
  @media (min-width: ${breakPoint.tabletPortrait}) {
    padding: ${(props) => (props.token ? `0 0 0 ${rem(80)}` : `0`)};
  }
`;

const currentPath = window.document.location.pathname;

// if (currentPath === "/") {
//   window.history.replaceState(null, "", homeAppRouter.home());
// }

const AppWithContext = () => {
  const [tokenWithoutContext] = React.useState<string | null>(TokenStorage());

  const isValidPath = () => {
    return (
      currentPath === authAppRouter.login() ||
      currentPath === homeAppRouter.home()
    );
  };

  if (currentPath === "/") {
    if (tokenWithoutContext) {
      !isValidPath() &&
        window.history.replaceState(null, "", homeAppRouter.home());
    } else {
      !isValidPath() && window.history.replaceState(null, "", "/landing");
    }
  }

  GetUserByName(UsernameStorage()).then((resp) => {
    localStorage.setItem("user", JSON.stringify(resp));
  });

  console.log(
    `window.location.pathname`,
    homeAppRouter.home(),
    window.location.pathname
  );

  return tokenWithoutContext ? (
    <AppFrame>
      <MobileHeader />
      {!window.location.pathname.includes(authApp) && <NavBarContainer />}
      <AppWrapper token={tokenWithoutContext}>
        <Router>
          <Switch>
            <Route path={homeAppRouter.home()} component={HomeApp} />
            <Route
              path={calendarAppRouter.calendar()}
              component={CalendarApp}
            />
            <Route path={socialAppRouter.social()} component={SocialApp} />
            <Route
              path={
                isMobile(window.innerWidth)
                  ? profileAppRouter.identity()
                  : profileAppRouter.profile()
              }
              component={ProfileApp}
            />
          </Switch>
        </Router>
      </AppWrapper>
    </AppFrame>
  ) : (
    <AppFrame>
      <Router>
        <Switch>
          <Route path={"/landing"} component={Landing} />
          <Route path={homeAppRouter.home()} component={HomeApp} />
          <Route path={authAppRouter.login()} component={AuthApp} />
        </Switch>
      </Router>
    </AppFrame>
  );
};

// You're welcome to Mars Exodus 2060 🌕🚀
export const App = () => <AppWithContext />;
