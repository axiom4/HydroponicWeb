import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsConfigurationComponent } from './settings-configuration/settings-configuration.component';

const routes: Routes = [
  { path: '', redirectTo: '/settings', pathMatch: 'full' },
  { path: 'settings', component: SettingsConfigurationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'changepassword', component: ChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
