import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router } from '@angular/router';

import {AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'home',
    providers: [AuthenticationService],
  directives: [ CORE_DIRECTIVES ],
 templateUrl: './app/dashboard/dashboard.html',
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
