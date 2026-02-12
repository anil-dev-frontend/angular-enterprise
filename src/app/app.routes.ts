import { Routes } from '@angular/router';
import { HOME_ROUTES } from './features/home/home.routes';
import { dashboardRoutes } from './features/dashboard/dashboard.routes';
import { AUTH_ROUTES } from '@features/auth/auth.routes';

export const routes: Routes = [
    ...HOME_ROUTES,
    ...dashboardRoutes,
    ...AUTH_ROUTES
];
