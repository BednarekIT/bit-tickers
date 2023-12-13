import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core';
import {NgrxSignalTickersStore} from "../ngrx-signal-tickers/ngrx-signal-tickers.store";
import {JsonPipe} from "@angular/common";
import {TickerDetailsComponent} from "../../components/ticker-details/ticker-details.component";

@Component({
  selector: 'app-ngrx-signal-ticker-details',
  standalone: true,
  imports: [
    JsonPipe,
    TickerDetailsComponent
  ],
  templateUrl: './ngrx-signal-ticker-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxSignalTickerDetailsComponent implements OnInit {
  @Input() id = '';

  private store = inject(NgrxSignalTickersStore);
  details = this.store.details;
  ngOnInit() {
    this.store.updateSelected(this.id);
  }
}
