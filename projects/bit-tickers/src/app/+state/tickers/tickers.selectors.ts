import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TickersState} from "./tickers.reducer";
import {selectRouteParam} from "../router/router.selectors";

const tickersState = createFeatureSelector<TickersState>('tickers');
export const tickersItems = createSelector(tickersState, (state: TickersState) => state.items);
export const tickersPagination = createSelector(tickersState, (state: TickersState) => state.pagination);
export const tickersLoading = createSelector(tickersState, (state: TickersState) => state.loading);
export const selectFromRoute = createSelector(
  tickersItems,
  selectRouteParam('id'),
  (tickers, id) => tickers.find((t) => t.id === id)
)
