import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import ApplicationMessages from '../../../assets/i18n/en.json';

@Component({
  selector: 'login-app-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  errorMessage: string = ApplicationMessages.signInForm.signInErrorMessage;
  loginForm!: FormGroup;
  actionBtn: string = 'Sign In';
  loginDialogComponent: any;
  showErrorMessage: boolean = false;
  appMessages: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.appMessages = ApplicationMessages;
    // this.actionBtn = this.appMessages.signInForm.signIn;
    // this.loginDialogComponent = this.dialogRef;
    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
  }

  handleSubmitLogin() {
    // const userData: any = sessionStorage.getItem('signUpObject');
    // const userInfoData = JSON.parse(userData);
    // if (
    //   userInfoData.email == this.loginForm?.value?.email &&
    //   userInfoData.password == this.loginForm?.value?.password
    // ) {
    //   this.showErrorMessage = false;
    //   this.router.navigateByUrl('user-list');
    //   this.sharedService.userInfoEmitter.emit({ userInfoData });
    //   this.loginDialogComponent.close();
    // } else {
    //   this.showErrorMessage = true;
    //   this.loginForm.invalid;
    // }
  }
}
