import {TestBed} from '@angular/core/testing';
import {TickersService} from './tickers.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {GridResponse, TickerDTO} from "../data/data";

const tickers: GridResponse<TickerDTO> = {
    items: [{
        "id": "btc-bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
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
    }],
    totalCount: 1
}

describe('TickersService', () => {
    let service: TickersService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(TickersService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#getTickers should use GET to retrieve data', () => {
        service.getTickers().subscribe();
        const testRequest = httpTestingController.expectOne('/assets/data/tickers.json');
        expect(testRequest.request.method).toEqual('GET');
    });

    it('#getTickers should return transformed GridResponse data', () => {
        service.getTickers().subscribe(data => {
            expect(data).toEqual(tickers);
        });
        const req = httpTestingController.expectOne('/assets/data/tickers.json');
        expect(req.request.method).toEqual('GET');
        req.flush(tickers.items);
    })

});
