import {Routes} from '@angular/router';
import {tickersReducer} from "./+state";
import {provideState} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import {TickersEffects} from "./+state/tickers/tickers.effects";
import {tickersGuard} from "./guards/tickers.guard";
import {TickersFacade} from "./+state/tickers/tickers.facade";
import {SignalsTickersComponent, TickersRootComponent} from "./containers";

export function clearState(reducer: any) {
  return function (state: any, action: any) {
    if (action.type === 'CLEAR') {
      return reducer(undefined, action);
    }
    return reducer(state, action);
  };
}
export const routes: Routes = [
  {
    path: 'ngrx', component: TickersRootComponent,
    providers: [
      TickersFacade,
      provideState('tickers', tickersReducer, {metaReducers: [clearState]}),
      provideEffects([TickersEffects])
    ],
    canMatch: [tickersGuard],
    loadChildren: () => import('./containers/ngrx.routes').then(m => m.ngrxRoutes)
  },
  {path: 'signal', component: SignalsTickersComponent},
  {path: 'signal/:id', component: SignalsTickersComponent},
  {
    path: '**',
    redirectTo: 'ngrx',
    pathMatch: 'full',
  },
];
