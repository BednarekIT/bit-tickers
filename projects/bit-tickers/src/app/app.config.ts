import {ApplicationConfig, enableProdMode} from '@angular/core';
import {provideRouter, withComponentInputBinding, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {environment} from "../environment/environment";
import {provideStore} from "@ngrx/store";
import {tickersReducer} from "./+state/tickers/tickers.reducer";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideEffects} from "@ngrx/effects";
import {provideRouterStore, routerReducer} from "@ngrx/router-store";

if (environment.production) {
  enableProdMode();
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withComponentInputBinding(),
      withViewTransitions()
    ),
    provideHttpClient(),
    provideStore({router: routerReducer}),
    provideRouterStore(),
    provideStoreDevtools(),
    provideEffects([])
  ]
};
