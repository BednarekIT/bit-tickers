import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Page} from "../../../../bit-datatable/src/lib/bit-datatable.interface";
import {map, Observable} from "rxjs";
import {GridResponse, TickerDTO} from "../data/data";

@Injectable({
  providedIn: 'root'
})
export class TickersService {

  constructor(private http: HttpClient) {
  }

  getTickers(): Observable<GridResponse<TickerDTO>> {
    return this.http.get(`/assets/data/tickers.json`).pipe(
      map((response: any) => {
        return {
          items: response,
          totalCount: response.length
        }
      }));
  }
}
