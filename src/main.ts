/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

import { provideRouter } from '@angular/router';
import routerConfig from './app/routes';

bootstrapApplication(AppComponent, {providers: [provideProtractorTestingSupport(), provideRouter(routerConfig)]}).catch((err) =>
  console.error(err),
);
