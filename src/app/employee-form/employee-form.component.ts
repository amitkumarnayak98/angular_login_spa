import { Component, OnInit } from '@angular/core';
import ApplicationMessages from '../../assets/i18n/en.json';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmPopupDialogComponent } from '../shared/confirm-popup-dialog/confirm-popup-dialog.component';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  signUpForm!: FormGroup;
  dialogConfig = new MatDialogConfig();
  appMessages: any;
  employeeFormData: any;
  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;

    this.signUpForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.signUpForm.namePattern),
        ],
      ],
      middleName: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.signUpForm.namePattern),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.signUpForm.namePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.signUpForm.emailPattern),
        ],
      ],
      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.employeeForm.numberPattern),
        ],
      ],
      address: ['', [Validators.required]],
      city: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.signUpForm.namePattern),
        ],
      ],
      state: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.signUpForm.namePattern),
        ],
      ],
      country: [
        '',
        [
          Validators.required,
          Validators.pattern(this.appMessages.signUpForm.namePattern),
        ],
      ],
      postalZipCode: ['', [Validators.required]],
      birthData: [''],
      additionalInformation: [''],
    });
  }

  getEmployeeFormData() {
    this.employeeFormData = this.signUpForm.value;
    console.log(this.employeeFormData);
    this.dialogConfig.width = '50%';
    this.dialogConfig.data = {
      employeeDetails: this.employeeFormData,
    };
    this.dialog
      .open(ConfirmPopupDialogComponent, this.dialogConfig)
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          // this.getAllProducts();
        }
      });
  }

  resetForm() {
    this.signUpForm.reset();
  }
}
