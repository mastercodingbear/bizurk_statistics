import { Route } from '@angular/router';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
  // Redirect empty path to '/dashboards/project'
  { path: '', pathMatch: 'full', redirectTo: 'dashboard/statistics' },

  {
    path: 'dashboard',
    children: [
      {
        path: 'statistics',
        loadChildren: () =>
          import('app/module/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
];
