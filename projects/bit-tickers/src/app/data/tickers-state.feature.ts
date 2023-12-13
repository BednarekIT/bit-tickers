import {computed, inject, signal} from '@angular/core';
import {
  patchState,
  signalStoreFeature, type,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import {setAllEntities, withEntities} from "@ngrx/signals/entities";
import {TickerDTO} from "./data";
import {TickersService} from "../services/tickers.service";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import {switchMap, tap} from "rxjs";


export interface TickersState {
  loading: boolean;
  selectedId: string;
  error: unknown;
  size: number;
  totalElements: number;
  totalPages: number;
  pageNumber: number;
}

export const initTickersState: TickersState = {
  loading: false,
  selectedId: '',
  error: null,
  pageNumber: 0,
  totalElements: 0,
  totalPages: 0,
  size: 0
}

export function withTickersState() {
  return signalStoreFeature(
    withState<TickersState>(initTickersState),
    withEntities<TickerDTO>(),
    withComputed((state) => ({
      loading$: computed(() => state.loading()),
      details: computed(() => state.entityMap()[state.selectedId()]),
      error: computed(() => state.error ? state.error() : null),
      pagination: computed(() => {
        return {
          size: state.size(),
          totalPages: state.totalPages(),
          totalElements: state.totalElements(),
          pageNumber: state.pageNumber(),
        }
      }),
    })),
    withEntities<TickerDTO>(),
    withMethods(
      (store, tickersService = inject(TickersService)) => ({
        loadTickers: rxMethod<any>((c$) => c$.pipe(
          switchMap(c => tickersService.getTickers()),
          tap(tickers => {
            patchState(store,
              {
                pageNumber: 1,
                size: 10,
                totalElements: tickers.totalCount,
                totalPages: Math.ceil(tickers.totalCount / 10)
              },
              setAllEntities(tickers.items));
          })
        )),
        updateSelected(selectedId: string): void {
          patchState(store, {selectedId});
        }
      })),
    withHooks({
      onInit(store): void {
        store.loadTickers({})
        console.log(store);
      },
    })
  );
}

