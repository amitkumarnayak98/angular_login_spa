import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../services/shared.service';
import ApplicationMessages from '../../../assets/i18n/en.json';
import {
  EMAIL_PATTERN_MISMATCH,
  NAME_PATTERN_MISMATCH,
  PASSWORD_PATTERN_MISMATCH,
  USERNAME_PATTERN_MISMATCH,
} from '../constant';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
})
export class FormComponentComponent implements OnInit {
  formGroup: any;
  appMessages: any;

  @Input() formControls: any;
  @Input() name: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {
    this.appMessages = ApplicationMessages;
  }

  ngOnInit(): void {
    const formControlsArray: any = this.formControls.reduce(
      (acc: any, each: any) => {
        if (each?.formControlName === 'email') {
          acc[each?.formControlName] = [
            '',
            [
              Validators.required,
              Validators.pattern(EMAIL_PATTERN_MISMATCH),
              // this.nameValidator.bind(this),
            ],
          ];
        } else if (each?.formControlName === 'userName') {
          acc[each?.formControlName] = [
            '',
            [
              Validators.required,
              Validators.pattern(USERNAME_PATTERN_MISMATCH),
            ],
          ];
        } else if (each?.formControlName === 'name') {
          acc[each?.formControlName] = [
            '',
            [Validators.required, Validators.pattern(NAME_PATTERN_MISMATCH)],
          ];
        } else if (each?.formControlName === 'password') {
          acc[each?.formControlName] = [
            '',
            [
              Validators.required,
              Validators.pattern(PASSWORD_PATTERN_MISMATCH),
            ],
          ];
        }
        return acc;
      },
      {}
    );
    this.formGroup = this.formBuilder.group(formControlsArray);

    this.formGroup?.valueChanges?.subscribe((controls: any) => {
      this.sharedService.formGroupEmitter.emit(controls);
      this.sharedService.formGroupError.emit(
        this.formGroup && this.formGroup.valid ? this.formGroup.valid : false
      );
    });
  }

  ///To implemented for custom validation

  // nameValidator(control: any) {
  // console.log(control);
  // const validationData: any = this.checkValidInput(
  //   control.value ?? '',
  //   chamberNameConfigs.type ?? ''
  // );
  // if (control.value) {
  //   control.status = validationData.hasError ? INVALID : VALID;
  //   if (validationData.hasError) {
  //     return validationData;
  //   } else {
  //     return null;
  //   }
  // } else {
  //   if (control.dirty) {
  //     control.status = INVALID;
  //     return validationData;
  //   } else {
  //     return null;
  //   }
  // }
  // }
}
