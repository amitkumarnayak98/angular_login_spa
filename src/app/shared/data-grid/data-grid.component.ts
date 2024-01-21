import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import ApplicationMessages from '../../../assets/i18n/en.json';
import { ColumnSchemaDto } from '../constant';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements OnInit, OnChanges {
  appMessages: any;
  tableDataSource = new MatTableDataSource([]);
  /** List of column-bound keys */
  displayedColumns: Array<string> = [];
  subscriptions: Subscription[] = [];
  /** Initial Pagination details */
  paginationInfo: PageEvent = {
    length: 0,
    pageIndex: 0,
    pageSize: 10,
    previousPageIndex: 0,
  };
  /** tableDataSource from child component to be updated to mat-table */
  @Input() data: any;
  /** total records from child component shown on the table */
  @Input() totalRecord: number = 0;
  /** title of the table */
  @Input() tableTitle: string = '';
  /** width(from parent component) of all the columns */
  @Input() columnWidth: any;
  /** column header title, column key to be binded from the parent component */
  @Input() columnSchema: ColumnSchemaDto[] | any = [];
  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild('paginator') paginator: MatPaginator | undefined;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator | undefined;
  /** emitter to send event(onclick, onchange, mouseover, pagination) value to the parent component from data-grid component */
  @Output() rowAction = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;
    this.displayedColumns = this.columnSchema?.map(
      (columns: any) => columns.key
    );
    this.tableDataSource = new MatTableDataSource(this.data);
  }

  ngOnChanges() {
    this.appMessages = ApplicationMessages;
    this.displayedColumns = this.columnSchema?.map(
      (columns: any) => columns.key
    );
    this.tableDataSource = new MatTableDataSource(this.data);
  }

  /**
   * To update pagination on change of pageSize
   * @param event updated pagination info on change of pageSize options from dropdown
   */
  handlePagination(event: PageEvent) {
    if (this.paginationInfo.pageSize != event.pageSize) {
      // this.pageIndex = 0;
      this.paginationInfo = { ...event, pageIndex: 0 };
    } else {
      // this.pageIndex = event.pageIndex;
      this.paginationInfo = { ...event, pageIndex: event.pageIndex + 1 };
    }

    // this.rowAction.emit({
    //   pagination: this.paginationInfo,
    //   type: 'pagination',
    // });
  }
}
