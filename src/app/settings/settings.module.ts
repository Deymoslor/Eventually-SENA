import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsLikeComponent } from './settings-like/settings-like.component';
import { SettingsComponent } from './settings.component';
import { SettingsReportModule } from './settings-report/settings-report.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsEventComponent } from './settings-event/settings-event.component';



@NgModule({
  declarations: [
    SettingsComponent,
    SettingsLikeComponent,
    SettingsEventComponent,
  ],
  imports: [
    CommonModule,
    SettingsReportModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
