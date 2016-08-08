import { provideRouter, RouterConfig } from '@angular/router';
import { DashBoard }  from './dashboard/dashboard.component';
import { GridShow }  from './dashboard/gridshow.component';
import { LoginComponent }    from './login/login.component';
import { AddressBookComponent  }  from './dashboard/addressbook/addressbook.component';
const routes: RouterConfig = [
  { path: '', redirectTo: 'login', terminal: true},
  { path: 'login', component: LoginComponent },  
{ 
    path: 'dashboard', 
    component: DashBoard,
    children:[
      {path:'', component:AddressBookComponent}
      ]
 }
];
export const appRouterProviders = [
  provideRouter(routes)
];