import { Component } from '@angular/core';
import { Router,ROUTER_DIRECTIVES  } from '@angular/router';


import {AuthenticationService} from '../services/authentication.service'

@Component({
  moduleId: module.id.replace("/dist/", "/app/"),
  selector: 'home',
    providers: [AuthenticationService],
  directives: [ ROUTER_DIRECTIVES],
 templateUrl: './dashboard.html'
})
export class DashBoard {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router, private _service:AuthenticationService) {
       
  }

  ngOnInit(){
       if(!this._service.isUserLoggedIn())
       {           
          this.router.navigate(['/login']);
       }
  }
 
    logout() {
        this._service.logout();
        this.router.navigate(['/login']);
    }
    

}


