import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  directives: [ CORE_DIRECTIVES ],
 templateUrl: './app/dashboard/dashboard.html',
})
export class DashBoard {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router) {
  
  }

  logout() {
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  }


  
}
