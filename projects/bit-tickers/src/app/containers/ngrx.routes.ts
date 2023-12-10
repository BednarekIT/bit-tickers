import {Route} from "@angular/router";
import {NgrxTickersComponent} from "./ngrx-tickers/ngrx-tickers.component";
import {NgrxTickerDetailsComponent} from "./ngrx-ticker-details/ngrx-ticker-details.component";

export const ngrxRoutes: Route[] = [
    {path: '', component: NgrxTickersComponent},
    {path: ':id', component: NgrxTickerDetailsComponent},
]
