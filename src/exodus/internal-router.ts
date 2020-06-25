export type UriType = string;

export const authApp = "/app/auth/";
export const homeApp = "/app/home/";
export const calendarApp = "/app/calendar/";
export const socialApp = "/app/social/";
export const profileApp = "/app/profile/";

class AuthAppRoutes {
  login = () => `${authApp}/login`;
  register = () => `${authApp}/register`;
}

class HomeAppRoutes {
  home = () => `${homeApp}`;
  article = (articleId: number) => `${homeApp}article/${articleId}`;
}

class CalendarAppRoutes {
  calendar = () => `${calendarApp}`;
}

class SocialAppRoutes {
  social = () => `${socialApp}`;
  comments = () => `${socialApp}comments`;
}

class ProfileAppRoutes {
  profile = () => `${profileApp}`;
  identity = (token: string) => `${profileApp}identity/${token}`;
  ticket = (token: string) => `${profileApp}ticket/${token}`;
}

const authAppRoutes = new AuthAppRoutes();
export const authAppRouter = authAppRoutes;

const homeAppRoutes = new HomeAppRoutes();
export const homeAppRouter = homeAppRoutes;

const calendarAppRoutes = new CalendarAppRoutes();
export const calendarAppRouter = calendarAppRoutes;

const socialAppRoutes = new SocialAppRoutes();
export const socialAppRouter = socialAppRoutes;

const profileAppRoutes = new ProfileAppRoutes();
export const profileAppRouter = profileAppRoutes;

/* Todo : idéalement au lieu de devoir à chaque fois utiliser
les raccourcir de path (cf l.1 à 6) on voudrait une fonction 
permettant de les ajouter tout seul dans les appels de class */
