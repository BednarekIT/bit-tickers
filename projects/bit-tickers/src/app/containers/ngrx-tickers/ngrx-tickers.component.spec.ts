import {NgrxTickersComponent} from "./ngrx-tickers.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import * as tickerStore from '../../+state';
import {combineReducers, Store, StoreModule} from "@ngrx/store";
import {tickersReducer} from "../../+state";
import {BitDatatableComponent} from "../../../../../bit-datatable/src/lib/bit-datatable.component";
import {AsyncPipe, CurrencyPipe, DecimalPipe, JsonPipe, NgIf} from "@angular/common";
import {NumberFormatPipe} from "../../pipes/number-format.pipe";
import {SvgIconComponent} from "../../components";
import {RouterLink} from "@angular/router";
import {By} from "@angular/platform-browser";

const mockTick = {
    "id": "btc-bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "fav": false,
    "rank": 1,
    "circulating_supply": 19426506,
    "total_supply": 19426512,
    "max_supply": 21000000,
    "beta_value": 1.0563,
    "first_data_at": "2010-07-17T00:00:00Z",
    "last_updated": "2023-07-11T08:40:17Z",
    "quotes": {
        "USD": {
            "price": 30538.078793975994,
            "volume_24h": 13441600877.886246,
            "volume_24h_change_24h": 64.12,
            "market_cap": 593248170920,
            "market_cap_change_24h": 1.24,
            "percent_change_15m": -0.03,
            "percent_change_30m": -0.11,
            "percent_change_1h": -0.09,
            "percent_change_6h": 0.14,
            "percent_change_12h": -0.84,
            "percent_change_24h": 1.24,
            "percent_change_7d": -1.46,
            "percent_change_30d": 18.31,
            "percent_change_1y": 54.9,
            "ath_price": 68692.13703693185,
            "ath_date": "2021-11-10T16:50:00Z",
            "percent_from_price_ath": -55.54
        }
    }
};

describe('NgrxTickersComponent', () => {
    let component: NgrxTickersComponent;
    let fixture: ComponentFixture<NgrxTickersComponent>;
    let store: Store<tickerStore.TickersState>

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NgrxTickersComponent,
                BitDatatableComponent,
                AsyncPipe, NgIf, JsonPipe, CurrencyPipe, DecimalPipe, NumberFormatPipe, SvgIconComponent, RouterLink,
                StoreModule.forRoot({feature: combineReducers(tickersReducer)})
            ]
        });

        store = TestBed.inject(Store);

        fixture = TestBed.createComponent(NgrxTickersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have columns', () => {
        expect(component.columns.length).toBeGreaterThan(0);
    });

    it('should call #toggleFav(tickerDTO)', () => {
        spyOn(component, 'toggleFav').and.callThrough();
        component.toggleFav(mockTick);
        expect(component.toggleFav).toHaveBeenCalled();
    });

    it('should render datatable with header text', () => {
        const ele = fixture.debugElement.query(By.css('.ticker-header h2')).nativeElement;
        expect(ele.innerHTML).not.toBeNull();
        expect(ele.innerHTML).toBe("Today's Cryptocurrency Prices");
    });
});
