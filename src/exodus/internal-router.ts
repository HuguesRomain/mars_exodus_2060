type Router<T> = { [K in keyof T]: T[K] };

const prependUri = (prefix: string) => <T>(router: any): Router<T> =>
    Object.keys(router).reduce((acc, key) => {
        const route = router[key];
        return {
            ...acc,
            [key]: (...args: string[]): string => prefix + route.apply(null, args),
        };
    }, {} as Router<T>);


class HomeAppRoutes {
    home = () => ``;
    article = (articleId: number) => `article/${articleId}`;
}

class AuthAppRoutes {
    login = () => `/login`
    register = () => `/register`
}

const homeAppRoutes = new HomeAppRoutes();
export const homeAppRouter = prependUri("/app/home")(homeAppRoutes);

const authAppRoutes = new AuthAppRoutes();
export const authAppRouter = prependUri("/app/auth")(authAppRoutes);