import {ChangeDetectionStrategy, Component, inject, OnDestroy} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TickersFacade} from "../../+state/tickers/tickers.facade";

@Component({
  selector: 'app-tickers-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickersRootComponent implements OnDestroy {
    tickersFacade = inject(TickersFacade);
    ngOnDestroy() {
        this.tickersFacade.clearTickersState();
    }
}
