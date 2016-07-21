import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
    <h1>Component Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }