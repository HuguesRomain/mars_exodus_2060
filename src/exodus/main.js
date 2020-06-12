import * as React from 'react';
import { AppFrame } from "./startup";

const AuthApp = React.lazy(() => import("./apps/auth"));
const HomeApp = React.lazy(() => import("./apps/home"))
const ProfileApp = React.lazy(() => import("./apps/profile"))
const CalandarApp = React.lazy(() => import("./apps/calandar"))
const SocialApp = React.lazy(() => import("./apps/social"))

export const AppContext = React.createContext(null);

const launchers = [
    ["/app/auth", AuthApp],
    ["/app/home", HomeApp],
    ["/app/profile", ProfileApp],
    ["/app/calandar", CalandarApp],
    ["/app/social", SocialApp],
];

const getApp = () => {
    const currentPath = window.document.location.pathname;

    if (currentPath === "/") {
        window.history.replaceState(null,"/app/home");
        return HomeApp;
    }

    const maybeApp = launchers.find(([pathPrefix]) => currentPath.startsWith(pathPrefix));

    if (maybeApp) {
        const [, App] = maybeApp;
        return App;
    } else {
        return undefined;
    }
};

const AppWithContext = ({ App }) => {
    return (
        <AppFrame>
            <App />
        </AppFrame>
    )
}

// You're welcome to Mars Exodus 2060 🌕🚀
export const App = () => {
    const App = getApp();
    if (!App) {
       return (
           <div>Il n'y à pas de page ici</div>
       )
    }
    return <AppWithContext App={App} />;
};
