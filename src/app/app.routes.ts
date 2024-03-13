import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'user/:id',
    loadComponent: () =>
      import('./pages/user-detail/user-detail.page').then(
        (m) => m.UserDetailPage
      ),
  },
];
