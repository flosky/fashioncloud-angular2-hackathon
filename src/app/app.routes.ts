import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { PostComponent } from './post';
import { PostsComponent } from './posts';
import { UserComponent } from './user';
import { UsersComponent } from './users';
import { AlbumComponent } from './album';

export const routes: RouterConfig = [
  { path: '', component: UsersComponent },
  { path: 'about', component: AboutComponent},
  { path: 'post/:id' , component: PostComponent},
  { path: 'post' , component: PostsComponent},
  { path: 'user/:id', component:  UserComponent },
  { path: 'album/:id', component: AlbumComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
