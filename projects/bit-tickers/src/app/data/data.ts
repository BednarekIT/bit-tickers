import {Page} from "../../../../bit-datatable/src/lib/bit-datatable.interface";

export interface GridResponse<T> {
  items: T[];
  totalCount: number;
}

export interface InitStore<T> {
  loading: boolean;
  items: T[];
  pagination: Page;
  error?: unknown;
}

export interface TickerDTO {
  id: string
  name: string
  symbol: string
  rank: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  beta_value: number
  first_data_at: string
  last_updated: string
  fav?: boolean
  quotes: Quotes
}

export interface Quotes {
  USD: Usd
}

export interface Usd {
  price: number
  volume_24h: number
  volume_24h_change_24h: number
  market_cap: number
  market_cap_change_24h: number
  percent_change_15m: number
  percent_change_30m: number
  percent_change_1h: number
  percent_change_6h: number
  percent_change_12h: number
  percent_change_24h: number
  percent_change_7d: number
  percent_change_30d: number
  percent_change_1y: number
  ath_price: number
  ath_date: string
  percent_from_price_ath: number
}
