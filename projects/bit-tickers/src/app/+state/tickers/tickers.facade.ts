import {inject, Injectable} from "@angular/core";
import {TickersState} from "./tickers.reducer";
import {select, Store} from "@ngrx/store";
import {selectFromRoute, tickersItems, tickersLoading, tickersPagination} from "./tickers.selectors";
import {clearTickersState, loadTickers, toggleFavorite} from "./tickers.actions";
import {Page} from "../../../../../bit-datatable/src/lib/bit-datatable.interface";
import {TickerDTO} from "../../data/data";

@Injectable()
export class TickersFacade {
  store = inject(Store<TickersState>);

  item$ = this.store.pipe(select(tickersItems));
  pagination$ = this.store.pipe(select(tickersPagination));
  loading$ = this.store.pipe(select(tickersLoading));
  details$ = this.store.pipe(select(selectFromRoute));

  getTickers() {
    this.store.dispatch(loadTickers())
  }

  clearTickersState() {
    this.store.dispatch(clearTickersState());
  }

  toggleFavorite(ticker: TickerDTO) {
    const favTickers = localStorage.getItem('favTickers');
    if (favTickers && ticker.fav) {
      const current = JSON.parse(favTickers) as string[];
      localStorage.setItem('favTickers', JSON.stringify([...current.filter((t) => t != ticker.id)]))
    }

    if (favTickers && !ticker.fav) {
      const current = JSON.parse(favTickers) as string[];
      localStorage.setItem('favTickers', JSON.stringify([...current, ticker.id]));
    }

    this.store.dispatch(toggleFavorite({ticker}))
  }
}
