import * as React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { AppFrame } from "./startup";
import { breakPoint } from "styles/const";

const AuthApp = React.lazy(() => import("./apps/auth"));
const HomeApp = React.lazy(() => import("./apps/home"));
const ProfileApp = React.lazy(() => import("./apps/profile"));
const CalendarApp = React.lazy(() => import("./apps/calendar"));
const SocialApp = React.lazy(() => import("./apps/social"));

export const AppContext = React.createContext(null);

const launchers = [
  ["/app/auth", AuthApp],
  ["/app/home", HomeApp],
  ["/app/profile", ProfileApp],
  ["/app/calendar", CalendarApp],
  ["/app/social", SocialApp],
];

const getApp = () => {
  const currentPath = window.document.location.pathname;

  if (currentPath === "/") {
    window.history.replaceState(null, null, "/app/home");
    return HomeApp;
  }

  const maybeApp = launchers.find(([pathPrefix]) =>
    currentPath.startsWith(pathPrefix)
  );

  if (maybeApp) {
    const [, App] = maybeApp;
    return App;
  } else {
    return undefined;
  }
};

const AppWrapper = styled.div`
  padding: ${rem(69)} 0 ${rem(90)} 0;
  @media (min-width: ${breakPoint.tabletPortrait}) {
    padding: 0 0 0 ${rem(80)};
  }
`;

const AppWithContext = ({ App }) => {
  return (
    <AppFrame>
      <AppWrapper>
        <App />
      </AppWrapper>
    </AppFrame>
  );
};

// You're welcome to Mars Exodus 2060 🌕🚀
export const App = () => {
  const App = getApp();
  if (!App) {
    return <div>Il n'y à pas de page ici</div>;
  }
  return <AppWithContext App={App} />;
};
