import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxSignalTickersComponent } from './ngrx-signal-tickers.component';

describe('NgrxSignalTickersComponent', () => {
  let component: NgrxSignalTickersComponent;
  let fixture: ComponentFixture<NgrxSignalTickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxSignalTickersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgrxSignalTickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
