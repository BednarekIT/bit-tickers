import {GridResponse, TickerDTO} from "../../data/data";
import {createAction, props} from "@ngrx/store";
import {Page} from "../../../../../bit-datatable/src/lib/bit-datatable.interface";

export const loadTickers = createAction('[Tickers] Load Request');
export const loadTickersSuccess = createAction('[Tickers] Load Success', props<{ tickers: GridResponse<TickerDTO>}>());
export const loadTickersFailure = createAction('[Tickers] Load Failure', props<{ error: unknown}>());
export const toggleFavorite = createAction('[Tickers] Toggle favorite', props<{ ticker: TickerDTO}>());
export const clearTickersState = createAction('CLEAR');
