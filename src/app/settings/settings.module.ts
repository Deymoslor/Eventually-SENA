import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsEventComponent } from './settings-event/settings-event.component';
import { SettingsLikeComponent } from './settings-like/settings-like.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';
import { SettingsReportModule } from './settings-report/settings-report.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { MenuModule } from '../menu/menu.module';




@NgModule({
  declarations: [
    SettingsComponent,
    SettingsLikeComponent,
    SettingsEventComponent,
    UpdateUserAccountComponent
  ],
  imports: [
    CommonModule,
    SettingsReportModule,
    SettingsRoutingModule,
    MenuModule
  ],
})
export class SettingsModule { }
