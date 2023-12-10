import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TickersService} from "../../services/tickers.service";
import * as tickersStore from '../index';
import {catchError, exhaustMap, map, of} from "rxjs";

@Injectable()
export class TickersEffects {
  actions$ = inject(Actions);
  tickersService = inject(TickersService);

  loadTickers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tickersStore.loadTickers),
      exhaustMap((data) =>
        this.tickersService.getTickers()
          .pipe(
            map((tickers) => tickersStore.loadTickersSuccess({tickers})),
            catchError((error) => of(tickersStore.loadTickersFailure({error})))
          )
      )
    )
  )
}
