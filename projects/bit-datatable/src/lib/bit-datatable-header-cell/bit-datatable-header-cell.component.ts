import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  Output
} from '@angular/core';
import {nextSortDir, SortDirection} from "../bit-datatable.interface";

@Component({
  selector: 'lib-bit-datatable-header-cell',
  standalone: true,
  imports: [],
  templateUrl: './bit-datatable-header-cell.component.html',
  styleUrl: './bit-datatable-header-cell.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BitDatatableHeaderCellComponent {

  @Output() setSort: EventEmitter<any> = new EventEmitter();
  @Input() column: any;
  @Input() set sort (val: any) {
    this.sortDir = this.calcSortDir(val);
    this.sortClass = this.calcSortClass(this.sortDir);
    this.cd.markForCheck();
  }

  sortDir: SortDirection | any;
  sortClass: string | unknown;
  cd = inject(ChangeDetectorRef);

  calcSortDir(sort: any): any {
    if (sort && this.column) {
      if (sort.prop === this.column.prop) {
        return sort.dir;
      }
    }
  }

  onSort(): void {
    if (!this.column.sortable) return;

    const newValue = nextSortDir(this.sortDir);
    this.setSort.emit({
      prop: this.column.prop,
      dir: newValue
    });
  }

  calcSortClass(sortDir: SortDirection): string {
    if (!this.column.sortable) return '';
    if (sortDir === SortDirection.asc) {
      return `sort-btn fa fa-sort-up`;
    } else if (sortDir === SortDirection.desc) {
      return `sort-btn fa fa-sort-down`;
    } else {
      return `sort-btn fa fa-sort`;
    }
  }

}
