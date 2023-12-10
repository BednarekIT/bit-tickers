import {CanActivateFn} from '@angular/router';
import {inject} from "@angular/core";
import {TickersFacade} from "../+state/tickers/tickers.facade";

export const tickersGuard: CanActivateFn = (route, state) => {
  const tickersFacade = inject(TickersFacade);
  tickersFacade.getTickers();
  return true;
};
