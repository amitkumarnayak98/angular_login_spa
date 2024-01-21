import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AngularMaterialModule } from '@lightning-spa/angular-material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from '../angular-material-module/material-module/material-module.module';
// import { MaterialModuleModule } from 'angular-material-module/material-module/material-module.module';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';
import { FormComponentComponent } from './form-component/form-component.component';
// import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { ConfirmPopupDialogComponent } from './confirm-popup-dialog/confirm-popup-dialog.component';
@NgModule({
  declarations: [
    DialogComponent,
    HeaderComponent,
    FormComponentComponent,
    // LoginDialogComponent,
    DataGridComponent,
    ConfirmPopupDialogComponent,
  ],
  imports: [
    CommonModule,
    // AngularMaterialModule,
    MaterialModuleModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DialogComponent,
    HeaderComponent,
    FormComponentComponent,
    // LoginDialogComponent,
    MaterialModuleModule,
    DataGridComponent,
    FormsModule,
    ReactiveFormsModule,
    ConfirmPopupDialogComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
