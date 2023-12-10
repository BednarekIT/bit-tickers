import {computed, inject, Injectable, signal} from "@angular/core";
import {Page} from "../../../../bit-datatable/src/lib/bit-datatable.interface";
import {GridResponse, TickerDTO} from "../data/data";
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs";

const initialValue = {
  loading: false,
  items: [] as TickerDTO[],
  pagination: new Page(50),
  error: null
};

@Injectable({
  providedIn: 'root'
})
export class TickerSignalsFacade {

  private readonly httpClient = inject(HttpClient);

  private state = signal(initialValue)

  readonly loading = computed(() => this.state().loading);
  readonly items = computed(() => this.state().items);
  readonly pagination = computed(() => this.state().pagination);
  readonly error = computed(() => this.state().error);

  constructor() {

  }

  getTickers = toSignal(this.httpClient.get<TickerDTO[]>(`/assets/data/tickers.json`).pipe(
    map((response: any) => {
      return {
        items: response,
        totalCount: response.length
      }
    }),
    map((resp) => {
      this.updateItems(resp);
    })
  ));

  updateItems(tickers: GridResponse<TickerDTO>): void {
    this.state.update(state => {
      const favTickers = localStorage.getItem('favTickers');
      return ({
        ...state,
        loading: false,
        error: null,
        items: tickers.items.map((d, i) => ({
          ...d,
          fav: favTickers ? JSON.parse(favTickers).indexOf(d.id) > -1 : false
        })),
        pagination: {
          ...state.pagination,
          totalElements: tickers.totalCount,
          totalPages: Math.ceil(tickers.totalCount / state.pagination.size)
        }
      })
    })
  }

  toggleFav(ticker: TickerDTO): void {
    const favTickers = localStorage.getItem('favTickers');
    if (favTickers && ticker.fav) {
      const current = JSON.parse(favTickers) as string[];
      localStorage.setItem('favTickers', JSON.stringify([...current.filter((t) => t != ticker.id)]))
    }

    if (favTickers && !ticker.fav) {
      const current = JSON.parse(favTickers) as string[];
      localStorage.setItem('favTickers', JSON.stringify([...current, ticker.id]));
    }

    this.state.update(state => {
      return ({
        ...state,
        items: state.items.map((t) => {
          if (t.id === ticker.id) {
            return {...t, fav: !ticker.fav}
          }
          return t;
        })
      });
    })
  }

}
