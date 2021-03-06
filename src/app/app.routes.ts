import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  HomeComponent,
  ProductComponent,
  SearchComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
