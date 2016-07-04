import { provideRouter, RouterConfig } from '@angular/router';
import { FaHomeComponent } from './+home/fa-home/fa-home.component';
import { FaSearchComponent } from './+search/fa-search/fa-search.component';
import { FaSpinComponent } from './+spin/fa-spin/fa-spin.component';

export const routes: RouterConfig = [
  { path: '', component: FaHomeComponent },
  { path: 'search', component: FaSearchComponent },
  { path: 'spin', component: FaSpinComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];