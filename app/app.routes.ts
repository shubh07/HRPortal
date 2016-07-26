import { provideRouter, RouterConfig } from '@angular/router';
import { DashBoard }  from './dashboard/dashboard';
import { LoginComponent }    from './login/login.component';
const routes: RouterConfig = [
  { path: '', redirectTo: 'login', terminal: true},
  { path: 'dashboard', component: DashBoard },
  { path: 'login', component: LoginComponent }
];
export const appRouterProviders = [
  provideRouter(routes)
];