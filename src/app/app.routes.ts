import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { UserComponent } from './user';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/:id', component:  UserComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
