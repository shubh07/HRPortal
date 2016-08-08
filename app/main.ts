// main entry point
import { bootstrap }          from '@angular/platform-browser-dynamic';
import { AppComponent }       from './app.component';
import { appRouterProviders } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {provide} from '@angular/core';
import {
  Location,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

bootstrap(AppComponent, [
  appRouterProviders,provideForms(),{provide: LocationStrategy, useClass: HashLocationStrategy}
])
.catch(err => console.error(err));