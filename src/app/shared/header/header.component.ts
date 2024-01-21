import {
  FormArrayDto,
  LoginClickEventDto,
  ProfileOptions,
  SignUpClickEventDto,
  profileMenuOptions,
  signUpFormControls,
} from '../constant';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { DialogComponent } from '../dialog/dialog.component';
import ApplicationMessages from '../../../assets/i18n/en.json';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appMessages: any;
  dialogConfig = new MatDialogConfig();
  profileOptions: Array<ProfileOptions> = profileMenuOptions;
  formControlsArraySignUp: Array<FormArrayDto> = signUpFormControls;
  formControlArrayLogin: Array<FormArrayDto> =
    this.formControlsArraySignUp.filter((eachControl: FormArrayDto | any) =>
      ['email', 'password'].includes(eachControl.formControlName)
    );
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.appMessages = ApplicationMessages;
  }

  getHeaderProfile() {
    let blockSignInButton;
    const data: any = sessionStorage.getItem('signUpObject');
    const userInfo: Array<any> =
      data === null || data === undefined || data === ''
        ? []
        : [JSON.parse(data)];
    if (userInfo?.length && this.router.url.includes('user-list')) {
      blockSignInButton = true;
    } else if (userInfo?.length && this.router.url.includes('employee-form')) {
      blockSignInButton = true;
    } else {
      blockSignInButton = false;
    }
    return blockSignInButton;
  }

  getHeaderNav(name: string | undefined) {
    if (name === profileMenuOptions[0].name) {
      this.router.navigate(['user-list']);
    } else if (name === profileMenuOptions[1].name) {
      const data: any = {};
      sessionStorage.clear();
      this.router.navigate(['/']);
      this.openDialog();
    }
  }

  openDialog() {
    this.dialogConfig.width = '30%';
    this.dialogConfig.data = {
      name: 'signUpForm',
      controls: this.formControlsArraySignUp,
      heading: this.appMessages.signUpForm.heading,
      actionBtn: this.appMessages.application.save,
    };
    this.dialog
      .open(DialogComponent, this.dialogConfig)
      .componentInstance.clickAction.subscribe(
        (eachValue: { type: string; eventValue: any }) => {
          if (eachValue.type === 'signUp') {
            this.saveSignUpInfo(eachValue.eventValue);
          } else {
            this.dialog.closeAll();
            this.openLoginDialog();
          }
        }
      );
  }

  saveSignUpInfo(eventValue: SignUpClickEventDto) {
    if (!eventValue.disableBtnValue) {
      sessionStorage.setItem(
        'signUpObject',
        JSON.stringify(eventValue.controlValue)
      );

      this.dialogConfig.data.actionBtn =
        this.appMessages.application.goToLoginRedirection;
    }
  }

  validateLoginDetails(eventValue: SignUpClickEventDto) {
    const userData: any = sessionStorage.getItem('signUpObject');
    const userInfoData = JSON.parse(userData);

    if (
      userInfoData.email == eventValue.controlValue.email &&
      userInfoData.password == eventValue.controlValue.password
    ) {
      this.sharedService.showInvalidLoginMessage.emit(false);
      this.router.navigateByUrl('user-list');
      this.sharedService.userInfoEmitter.emit({ userInfoData });
      this.dialog.closeAll();
    } else {
      this.sharedService.showInvalidLoginMessage.emit(true);
    }
  }

  openLoginDialog() {
    this.dialogConfig.width = '30%';
    this.dialogConfig.data = {
      name: 'signInForm',
      controls: this.formControlArrayLogin,
      heading: this.appMessages.signInForm.heading,
      actionBtn: this.appMessages.signInForm.signIn,
    };
    this.dialog
      .open(DialogComponent, this.dialogConfig)
      .componentInstance.clickAction.subscribe(
        (eachValue: { type: string; eventValue: any }) => {
          this.validateLoginDetails(eachValue.eventValue);
        }
      );
  }
}
