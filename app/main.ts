// main entry point
import { bootstrap }          from '@angular/platform-browser-dynamic';
import { AppComponent }       from './app.component';
import { appRouterProviders } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [
  appRouterProviders,provideForms(),
])
.catch(err => console.error(err));