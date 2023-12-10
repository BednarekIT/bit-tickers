import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TickersFacade} from "../../+state/tickers/tickers.facade";
import {AsyncPipe, DatePipe, JsonPipe, NgIf} from "@angular/common";
import {SvgIconComponent} from "../../components/svg-icon/svg-icon.component";
import {NumberFormatPipe} from "../../pipes/number-format.pipe";
import {TickerPercentComponent} from "../../components/ticker-percent/ticker-percent.component";
import {tap} from "rxjs";
import {TickerDTO} from "../../data/data";

@Component({
  selector: 'app-ngrx-ticker-details',
  standalone: true,
    imports: [
        NgIf,
        AsyncPipe,
        JsonPipe,
        SvgIconComponent,
        NumberFormatPipe,
        TickerPercentComponent,
        DatePipe
    ],
  templateUrl: './ngrx-ticker-details.component.html',
  styleUrl: './ngrx-ticker-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxTickerDetailsComponent {
  tickersFacade = inject(TickersFacade);
  details$ = this.tickersFacade.details$;

  toggleFav(ticker: TickerDTO) {
    this.tickersFacade.toggleFavorite(ticker)
  }
}
