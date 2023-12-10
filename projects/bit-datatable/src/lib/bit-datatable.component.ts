import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BitDataTableColumn, BitDataTableConfig, Page} from "./bit-datatable.interface";
import {NgClass, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {BitDatatableHeaderCellComponent} from "./bit-datatable-header-cell/bit-datatable-header-cell.component";

@Component({
  selector: 'lib-bit-datatable',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NgForOf,
    NgIf,
    NgClass,
    BitDatatableHeaderCellComponent
  ],
  templateUrl: './bit-datatable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BitDatatableComponent {

  @Input({required: false}) title: string = '';
  @Input({required: false}) loading: boolean | null = false;
  @Input({required: true}) columns: BitDataTableColumn[] = [];
  @Input({required: true}) rows: any[] | null = [];
  @Input() config: BitDataTableConfig | undefined;
  @Input() pagination: any = new Page(50);

  trackByFn(index: number) {
    return index;
  }

}
