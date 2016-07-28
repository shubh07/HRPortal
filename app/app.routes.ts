import { provideRouter, RouterConfig } from '@angular/router';
import { DashBoard }  from './dashboard/dashboard.component';
import { LoginComponent }    from './login/login.component';
const routes: RouterConfig = [
  { path: '', redirectTo: 'login', terminal: true},
  { path: 'login', component: LoginComponent },  
  { 
    path: 'dashboard', 
    component: DashBoard
 }
];
export const appRouterProviders = [
  provideRouter(routes)
];