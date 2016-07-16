import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { AlbumsComponent } from './albums';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'albums/:id', component: AlbumsComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
