import {TickerDTO} from "../../data/data";
import {Page} from "../../../../../bit-datatable/src/lib/bit-datatable.interface";
import {Action, createReducer, on} from "@ngrx/store";
import * as tickerStore from '../index';

export interface TickersState {
  loading: boolean;
  items: TickerDTO[];
  pagination: Page;
  error?: unknown;
}

export const initTickersState: TickersState = {
  loading: false,
  items: [],
  pagination: new Page(50),
  error: null
}

const _tickersReducer = createReducer(
  initTickersState,
  on(tickerStore.loadTickers, (state: TickersState) => ({...state, loading: true})),
  on(tickerStore.loadTickersSuccess, (state: TickersState, {tickers}) => {
    const favTickers = localStorage.getItem('favTickers');
    return ({
      ...state,
      loading: false,
      error: null,
      items: tickers.items.map((d, i) => ({...d, fav: favTickers ? JSON.parse(favTickers).indexOf(d.id) > -1 : false})),
      pagination: {
        ...state.pagination,
        totalElements: tickers.totalCount,
        totalPages: Math.ceil(tickers.totalCount / state.pagination.size)
      }
    })
  }),
  on(tickerStore.toggleFavorite, (state: TickersState, {ticker}) => {
      return ({
        ...state,
        items: state.items.map((t) => {
          if (t.id === ticker.id) {
            return {...t, fav: !ticker.fav}
          }
          return t;
        })
      });
    }
  )
)

export function tickersReducer(state: TickersState | undefined, action: Action) {
  return _tickersReducer(state, action)
}
