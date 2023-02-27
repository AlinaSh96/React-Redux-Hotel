import { AuthPage } from '../../page/AuthPage/AuthPage';
import { MainPage } from '../../page/MainPage/MainPage';
import { NotFoundPage } from '../../page/NotFoundPage/NotFoundPage';

const AppRoutes = {
    MAIN: 'main',
    AUTH: 'auth',
    NOT_FOUND: 'not_found'
};

export const RoutePath = {
    [AppRoutes.AUTH]: '/',
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig = {
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage />
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
