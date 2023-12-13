import {ChangeDetectionStrategy, Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgrxSignalTickersStore} from "./ngrx-signal-tickers.store";
import {JsonPipe} from "@angular/common";
import {BitDatatableComponent} from "../../../../../bit-datatable/src/lib/bit-datatable.component";
import {NumberFormatPipe} from "../../pipes/number-format.pipe";
import {SvgIconComponent} from "../../components";
import {BitDataTableColumn, Page} from "../../../../../bit-datatable/src/lib/bit-datatable.interface";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-ngrx-signal-tickers',
  standalone: true,
  imports: [
    JsonPipe,
    BitDatatableComponent,
    NumberFormatPipe,
    SvgIconComponent,
    RouterLink
  ],
  templateUrl: './ngrx-signal-tickers.component.html',
  styleUrl: '../ngrx-tickers/ngrx-tickers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxSignalTickersComponent implements OnInit {

  @ViewChild('name', {static: true}) name: TemplateRef<any> | undefined;
  @ViewChild('priceTmpl', {static: true}) priceTmpl: TemplateRef<any> | undefined;
  @ViewChild('percent1hTmpl', {static: true}) percent1hTmpl: TemplateRef<any> | undefined;
  @ViewChild('percent24hTmpl', {static: true}) percent24hTmpl: TemplateRef<any> | undefined;
  @ViewChild('percent7dTmpl', {static: true}) percent7dTmpl: TemplateRef<any> | undefined;
  @ViewChild('numberTmpl', {static: true}) numberTmpl: TemplateRef<any> | undefined;
  @ViewChild('marketCupTmpl', {static: true}) marketCupTmpl: TemplateRef<any> | undefined;
  @ViewChild('volumeTmpl', {static: true}) volumeTmpl: TemplateRef<any> | undefined;
  @ViewChild('favoriteTmpl', {static: true}) favoriteTmpl: TemplateRef<any> | undefined;

  private store = inject(NgrxSignalTickersStore);

  items = this.store.entities;
  loading = this.store.loading$;
  pagination = this.store.pagination;

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

    // this.store.loadTickers(new Page(23))
  }


}
