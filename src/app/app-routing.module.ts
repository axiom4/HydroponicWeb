import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsConfigurationComponent } from './settings-configuration/settings-configuration.component';

const routes: Routes = [
  { path: '', redirectTo: '/settings', pathMatch: 'full' },
  { path: 'settings', component: SettingsConfigurationComponent },
  { path: 'config', component: SettingsConfigurationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
