import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { UserListGuardGuard } from './shared/services/user-list-guard.guard';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [UserListGuardGuard],
  },
  {
    path: 'employee-form',
    component: EmployeeFormComponent,
    canActivate: [UserListGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
