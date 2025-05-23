import { Routes } from '@angular/router';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {MarketComponent} from './components/market/market.component';
import {LoginComponent} from './components/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'productDetails/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'market',
    component: MarketComponent,
  }
];
