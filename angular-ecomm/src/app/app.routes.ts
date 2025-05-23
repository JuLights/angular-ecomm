import { Routes } from '@angular/router';

export const routes: Routes = [
  /*,
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },*/
  {
    path: 'market',
    loadComponent: () =>
      import('./components/market/market.component').then(
        (c) => c.MarketComponent
      ),
  }
];
