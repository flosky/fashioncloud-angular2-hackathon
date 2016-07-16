import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { PostComponent } from './post';
import { UserComponent } from './user';
import { AlbumComponent } from './album';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'post/:id' , component: PostComponent},
  { path: 'user/:id', component:  UserComponent },
  { path: 'album/:id', component: AlbumComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
