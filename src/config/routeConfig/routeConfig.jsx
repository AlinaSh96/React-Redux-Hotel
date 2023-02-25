import { AutorisationPage } from '../../page/AutorisationPage/AutorisationPage';
import { MainPage } from '../../page/MainPage/MainPage';
import { NotFoundPage } from '../../page/NotFoundPage/NotFoundPage';

const AppRoutes = {
    MAIN: 'main',
    AUTORISATION: 'autorisatiom',
    NOT_FOUND: 'not_found'
};

export const RoutePath = {
    [AppRoutes.AUTORISATION]: '/',
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig = {
    [AppRoutes.AUTORISATION]: {
        path: RoutePath.autorisatiom,
        element: <AutorisationPage />
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
