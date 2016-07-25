import { provideRouter, RouterConfig } from '@angular/router';
import { CrisisListComponent }  from './crisis-list.component';
import { LoginComponent }    from './login/login.component';
const routes: RouterConfig = [
  { path: '', redirectTo: 'login', terminal: true},
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'login', component: LoginComponent }
];
export const appRouterProviders = [
  provideRouter(routes)
];