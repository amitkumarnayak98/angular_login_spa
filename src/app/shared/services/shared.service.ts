import { EventEmitter, Injectable, Output } from '@angular/core';
import { FILED_REQUIRED, VALID, ValidationData } from '../constant';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  @Output() userInfoEmitter = new EventEmitter();
  @Output() formGroupEmitter = new EventEmitter();
  @Output() formGroupError = new EventEmitter<boolean>();
  @Output() showInvalidLoginMessage = new EventEmitter<boolean>();

  public signInForm: any = {
    email: '',
    password: '',
  };

  public signUpForm: any = {};

  getTdWidth(totalColumns: number) {
    return `${100 / totalColumns}%`;
  }

  /**  common validation function
   * @param  value: FormControl.value
   * @param  type: ('clusterName', 'chamberName')
   * returns validationData = {
   *  hasError: true / false,
   *  validationMessage: '<filtered validation messg>'
   * }
   */
  // checkValidInput(value: any, type: string) {
  //   const validationData: ValidationData = {
  //     hasError: false,
  //     validationMessage: VALID,
  //   };
  //   if (value === '' || value === undefined) {
  //     validationData.hasError = true;
  //     validationData.validationMessage = FILED_REQUIRED;
  //   } else {
  //     switch (type) {
  //       case
  //       // case chamberNameConfigs.type:
  //       //   if (chamberNameConfigs.pattern.test(value)) {
  //       //     if (chamberNameConfigs.trailingSpacePattern.test(value)) {
  //       //       validationData.hasError = true;
  //       //       validationData.validationMessage =
  //       //         chamberNameConfigs.trailingSpacesErrorMessg;
  //       //     } else {
  //       //       return validationData;
  //       //     }
  //       //   } else {
  //       //     validationData.hasError = true;
  //       //     validationData.validationMessage =
  //       //       chamberNameConfigs.patternMismatchMessage;
  //       //   }
  //       //   return validationData;
  //       // case clusterNameConfigs.type:
  //       //   if (clusterNameConfigs.pattern.test(value)) {
  //       //     if (clusterNameConfigs.trailingSpacePattern.test(value)) {
  //       //       validationData.hasError = true;
  //       //       validationData.validationMessage =
  //       //         clusterNameConfigs.trailingSpacesErrorMessg;
  //       //     } else {
  //       //       return validationData;
  //       //     }
  //       //   } else {
  //       //     validationData.hasError = true;
  //       //     validationData.validationMessage =
  //       //       clusterNameConfigs.patternMismatchMessage;
  //       //   }
  //       //   return validationData;
  //       default:
  //         return validationData;
  //     }
  //   }
  // }
}
