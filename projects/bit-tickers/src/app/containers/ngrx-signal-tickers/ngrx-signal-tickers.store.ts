import {signalStore} from "@ngrx/signals";
import {withTickersState} from "../../data/tickers-state.feature";

export const NgrxSignalTickersStore = signalStore(
  {providedIn: 'root'},
  withTickersState(),
)
