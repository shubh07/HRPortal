import { provideRouter, RouterConfig } from '@angular/router';
import { DashBoard }  from './dashboard/dashboard.component';
import { LoginComponent }    from './login/login.component';
import { AddressBookComponent  }  from './dashboard/addressbook/addressbook.component';
const routes: RouterConfig = [
  { path: '', redirectTo: 'login', terminal: true},
  { path: 'login', component: LoginComponent },  
{ 
    path: 'dashboard', 
    component: DashBoard,
    children:[
       {path:''},
      {path:'AddressBook', component:AddressBookComponent}
      ]
 }
];
export const appRouterProviders = [
  provideRouter(routes)
];