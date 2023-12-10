import {ChangeDetectionStrategy, Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TickerSignalsFacade} from "../../services/ticker-signals.facade";
import {JsonPipe} from "@angular/common";
import {NumberFormatPipe} from "../../pipes/number-format.pipe";
import {SvgIconComponent} from "../../components";
import {RouterLink} from "@angular/router";
import {BitDataTableColumn} from "../../../../../bit-datatable/src/lib/bit-datatable.interface";
import {BitDatatableComponent} from "../../../../../bit-datatable/src/lib/bit-datatable.component";
import {TickerDTO} from "../../data/data";

@Component({
  selector: 'app-signals-tickers',
  standalone: true,
  imports: [
    BitDatatableComponent,
    JsonPipe,
    NumberFormatPipe,
    SvgIconComponent,
    RouterLink
  ],
  templateUrl: './signals-tickers.component.html',
  styleUrl: '../ngrx-tickers/ngrx-tickers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsTickersComponent implements OnInit {

  @ViewChild('name', {static: true}) name: TemplateRef<any> | undefined;
  @ViewChild('priceTmpl', {static: true}) priceTmpl: TemplateRef<any> | undefined;
  @ViewChild('percent1hTmpl', {static: true}) percent1hTmpl: TemplateRef<any> | undefined;
  @ViewChild('percent24hTmpl', {static: true}) percent24hTmpl: TemplateRef<any> | undefined;
  @ViewChild('percent7dTmpl', {static: true}) percent7dTmpl: TemplateRef<any> | undefined;
  @ViewChild('numberTmpl', {static: true}) numberTmpl: TemplateRef<any> | undefined;
  @ViewChild('marketCupTmpl', {static: true}) marketCupTmpl: TemplateRef<any> | undefined;
  @ViewChild('volumeTmpl', {static: true}) volumeTmpl: TemplateRef<any> | undefined;
  @ViewChild('favoriteTmpl', {static: true}) favoriteTmpl: TemplateRef<any> | undefined;

  store = inject(TickerSignalsFacade)

  items = this.store.items;
  pagination = this.store.pagination;
  loading = this.store.loading;

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

  toggleFav(item: TickerDTO) {
    this.store.toggleFav(item);
  }
}
