import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsReportComponent } from './settings-report.component';
import { SettingsReportRoutingModule } from './settings-report-routing.module';
import { SettingsReportShowComponent } from './settings-report-show.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SettingsReportComponent,
    SettingsReportShowComponent
  ],
  imports: [
    CommonModule,
    SettingsReportRoutingModule,
    RouterModule
  ]
})
export class SettingsReportModule { }
