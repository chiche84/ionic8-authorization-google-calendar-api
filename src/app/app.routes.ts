import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'auth-success',
    loadComponent: () => import('./auth-success/auth-success.component').then(c => c.AuthSuccessComponent)
  },
  {
    path: 'main-page',
    loadComponent: () => import('./main-page/main-page.component').then(c => c.MainPageComponent)
  }
];
