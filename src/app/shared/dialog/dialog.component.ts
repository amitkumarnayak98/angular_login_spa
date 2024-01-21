import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';
import ApplicationMessages from '../../../assets/i18n/en.json';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  actionBtn: string = ApplicationMessages.application.save;
  errorMessage: string = ApplicationMessages.signInForm.signInErrorMessage;
  dialogComponent: any;
  showErrorMessage: boolean = false;
  disableBtn: boolean = true;
  appMessages: any;
  signUpForm!: FormGroup;
  @Output() clickAction = new EventEmitter<{ type: string; eventValue: any }>();

  constructor(
    public sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public parentData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;
    this.sharedService.formGroupEmitter.subscribe((eachControls: any) => {
      /** Binding the values onchange of field value in the form field
       * and storing it by the same formControl name in the common service file to fetch its value */
      const signUpFormControlee: any = this.parentData.controls.reduce(
        (acc: any, each: any) => {
          acc[each?.formControlName] = eachControls[each?.formControlName];
          (this.sharedService as SharedService | any)[this.parentData.name][
            each?.formControlName
          ] = eachControls[each?.formControlName]
            ? eachControls[each?.formControlName]
            : '';
          return acc;
        },
        {}
      );

      if (this.parentData.name === 'signUpForm') {
        /** Disabling the save btn
         *  when sigunFormControle keys are non empty strings and form-group is invalid
         */
        this.sharedService.formGroupError.subscribe((btnValue: any) => {
          this.disableBtn = !btnValue;
        });
      } else {
        if (
          this.sharedService.signInForm.password === undefined ||
          this.sharedService.signInForm.password === '' ||
          this.sharedService.signInForm.password === null
        ) {
          this.sharedService.showInvalidLoginMessage.emit(false);
        }

        /** Disabling the save btn
         *  when sigunFormControle keys are non empty strings and form-group is invalid
         */
        this.sharedService.formGroupError.subscribe((btnValue: any) => {
          this.disableBtn = !btnValue;
        });
      }
    });

    /** To show error message Username or Passowrd is not matching in the login dialog form */
    this.sharedService.showInvalidLoginMessage.subscribe((eventValue: any) => {
      if (eventValue) {
        this.showErrorMessage = true;
      } else {
        this.showErrorMessage = false;
      }
    });
    this.actionBtn = this.appMessages.application.save;
    this.dialogComponent = this.dialogRef;
  }
}
