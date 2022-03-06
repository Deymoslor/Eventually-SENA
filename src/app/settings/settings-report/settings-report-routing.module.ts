import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsReportComponent } from './settings-report.component';

const routes: Routes = [
  {
    path: 'settings-report', component:SettingsReportComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsReportRoutingModule { }
