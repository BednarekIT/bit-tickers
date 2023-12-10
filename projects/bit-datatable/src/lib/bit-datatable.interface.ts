import {TemplateRef} from "@angular/core";

export interface BitDataTableConfig {
  actions?: BitDataTableActions[];
  width?: string;
  class?: string;
  collapse?: any;
}

export interface BitDataTableActions {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface BitDataTableColumn {
  prop: string;
  name?: string;
  cellTemplate?: BitDateTableCellTemplateTypes | any;
  headerTemplate?: any;
  width?: string;
  align?: BitDateTableColumnAlignTypes;
  sticky?: boolean;
}

export type BitDateTableColumnAlignTypes = 'center' | 'left' | 'right';

export type BitDateTableCellTemplateTypes = 'id'
  | TemplateRef<any>;

export class Page {
  // The number of elements in the page
  size: number = 10;
  // The total number of elements
  totalElements: number = 0;
  // The total number of pages
  totalPages: number = 0;
  // The current page number
  pageNumber: number = 0;
  // Sort data
  sort?: any;
  // Filters data
  filters?: any;

  constructor(size: number = 6, totalElements: number = 0, pageNumber: number = 0) {
    this.size = size;
    this.totalElements = totalElements;
    this.totalPages = Math.ceil(totalElements / size);
    this.pageNumber = pageNumber;
  }
}

export enum SortDirection {
  asc = 'asc',
  desc = 'desc'
}

export function nextSortDir(current: SortDirection): SortDirection | undefined {

  if (!current) {
    return SortDirection.asc;
  } else if (current === SortDirection.asc) {
    return SortDirection.desc;
  } else if (current === SortDirection.desc) {
    return undefined;
  }

  return undefined;

}
