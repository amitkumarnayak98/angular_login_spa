import { Component, OnInit } from '@angular/core';
import ApplicationMessages from '../../assets/i18n/en.json';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared/services/shared.service';
import { ColumnSchemaDto } from '../shared/constant';
import { userListDisplayedColumns } from '../shared/column-schema.constant';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  appMessages: any;
  subscriptions: Subscription[] = [];
  tableData: any = sessionStorage.getItem('signUpObject');
  userInfo: Array<any> =
    this.tableData === null ||
    this.tableData === undefined ||
    this.tableData === ''
      ? []
      : [JSON.parse(this.tableData)];
  columnsData: ColumnSchemaDto[] = [];
  constructor(private router: Router, public sharedService: SharedService) {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;
    this.columnsData = userListDisplayedColumns(this.appMessages);
    this.tableData = this.getTableDataList();
  }

  /** Get list of data to be sent to common data-grid component */
  getTableDataList() {
    let data: any = [];
    if (this.userInfo) {
      data = this.userInfo ?? [];
    } else {
      this.subscriptions.push(
        this.sharedService.userInfoEmitter.subscribe((res: any) => {
          data = res ?? [];
        })
      );
    }
    return data;
  }

  /** Navigate to employee-form from user-list screen */
  getEmployeeForm() {
    this.router.navigate(['employee-form']);
  }
}
