import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { PostComponent } from './post';


export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'post/:id' , component: PostComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
