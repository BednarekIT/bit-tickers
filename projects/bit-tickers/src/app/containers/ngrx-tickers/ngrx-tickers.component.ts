import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TickersFacade} from "../../+state/tickers/tickers.facade";
import {AsyncPipe, CurrencyPipe, DecimalPipe, JsonPipe, NgIf} from "@angular/common";
import {BitDataTableColumn} from "../../../../../bit-datatable/src/lib/bit-datatable.interface";
import {BitDatatableComponent} from "../../../../../bit-datatable/src/lib/bit-datatable.component";
import {NumberFormatPipe} from "../../pipes/number-format.pipe";
import {SvgIconComponent} from "../../components/svg-icon/svg-icon.component";
import {TickerDTO} from "../../data/data";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-ngrx-tickers',
  standalone: true,
  providers: [TickersFacade],
  imports: [BitDatatableComponent, AsyncPipe, NgIf, JsonPipe, CurrencyPipe, DecimalPipe, NumberFormatPipe, SvgIconComponent, RouterLink],
  templateUrl: './ngrx-tickers.component.html',
  styleUrl: './ngrx-tickers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxTickersComponent implements OnInit {
  @ViewChild('name', {static: true}) name: TemplateRef<any> | undefined;
  @ViewChild('priceTmpl', {static: true}) priceTmpl: TemplateRef<any> | undefined;
  @ViewChild('percent1hTmpl', {static: true}) percent1hTmpl: TemplateRef<any> | undefined;
  @ViewChild('percent24hTmpl', {static: true}) percent24hTmpl: TemplateRef<any> | undefined;
  @ViewChild('percent7dTmpl', {static: true}) percent7dTmpl: TemplateRef<any> | undefined;
  @ViewChild('numberTmpl', {static: true}) numberTmpl: TemplateRef<any> | undefined;
  @ViewChild('marketCupTmpl', {static: true}) marketCupTmpl: TemplateRef<any> | undefined;
  @ViewChild('volumeTmpl', {static: true}) volumeTmpl: TemplateRef<any> | undefined;
  @ViewChild('favoriteTmpl', {static: true}) favoriteTmpl: TemplateRef<any> | undefined;

  tickersFacade = inject(TickersFacade);
  items$ = this.tickersFacade.item$;
  pagination$ = this.tickersFacade.pagination$;
  loading$ = this.tickersFacade.loading$;

  columns: BitDataTableColumn[] = [];

  ngOnInit() {
    this.columns = [
      {prop: 'favorite', name: '', cellTemplate: this.favoriteTmpl, width: '20px'},
      {prop: 'rank', name: '#'},
      {prop: 'name', name: 'Name', cellTemplate: this.name},
      {prop: 'quotes.USD.price', name: 'Price', cellTemplate: this.priceTmpl, align: 'right'},
      {prop: 'quotes.USD.percent_change_1h', name: '1h%', cellTemplate: this.percent1hTmpl, align: 'right'},
      {prop: 'quotes.USD.percent_change_24h', name: '24h%', cellTemplate: this.percent24hTmpl, align: 'right'},
      {prop: 'quotes.USD.percent_change_7d', name: '7d%', cellTemplate: this.percent7dTmpl, align: 'right'},
      {prop: 'quotes.USD.market_cap', name: 'Market Cap', cellTemplate: this.marketCupTmpl, align: 'right'},
      {prop: 'quotes.USD.volume_24h', name: 'Volume (24h)', cellTemplate: this.volumeTmpl, align: 'right'},
      {prop: 'circulating_supply', name: 'Circulating Supply', cellTemplate: this.numberTmpl, align: 'right'},
    ]
  }

  toggleFav(ticker: TickerDTO) {
    this.tickersFacade.toggleFavorite(ticker)
  }
}
