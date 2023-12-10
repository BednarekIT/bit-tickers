import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitDatatableHeaderCellComponent } from './bit-datatable-header-cell.component';

describe('BitDatatableHeaderCellComponent', () => {
  let component: BitDatatableHeaderCellComponent;
  let fixture: ComponentFixture<BitDatatableHeaderCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitDatatableHeaderCellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitDatatableHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
