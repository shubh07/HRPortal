import { provideRouter, RouterConfig } from '@angular/router';
import { DashBoard }  from './dashboard/dashboard.component';
import { GridShow }  from './dashboard/gridshow.component';
import { LoginComponent }    from './login/login.component';
const routes: RouterConfig = [
  { path: '', redirectTo: 'login', terminal: true},
  { path: 'login', component: LoginComponent },  
/*  { 
    path: 'dashboard', 
    component: DashBoard
 },*/{ 
    path: 'dashboard', 
    component: GridShow
 }
];
export const appRouterProviders = [
  provideRouter(routes)
];