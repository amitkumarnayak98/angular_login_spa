import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import ApplicationMessages from '../../../assets/i18n/en.json';
import { employeeHeadings } from '../constant';

@Component({
  selector: 'app-confirm-popup-dialog',
  templateUrl: './confirm-popup-dialog.component.html',
  styleUrls: ['./confirm-popup-dialog.component.scss'],
})
export class ConfirmPopupDialogComponent implements OnInit {
  appMessages: any;
  employeeDetails: any;
  employeeHeadingsArray: Array<string> = employeeHeadings;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;
    console.log(this.data);
  }

  saveEmployeeDetails() {
    this.employeeDetails = this.data?.employeeDetails;
  }
}
