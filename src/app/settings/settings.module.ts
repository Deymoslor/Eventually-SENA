import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import { SettingsroutingModule } from './settings-routing.module';
>>>>>>> master
import { SettingsLikeComponent } from './settings-like/settings-like.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';
import { SettingsComponent } from './settings.component';
<<<<<<< HEAD
import { SettingsReportModule } from './settings-report/settings-report.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsEventComponent } from './settings-event/settings-event.component';
=======
import { MenuModule } from '../menu/menu.module';
>>>>>>> master



@NgModule({
  declarations: [
<<<<<<< HEAD
    SettingsComponent,
    SettingsLikeComponent,
    SettingsEventComponent,
  ],
  imports: [
    CommonModule,
    SettingsReportModule,
    SettingsRoutingModule
=======
    SettingsComponent,//veremos
    SettingsLikeComponent,
    UpdateUserAccountComponent
  ],
  imports: [
    CommonModule,
    SettingsroutingModule,
    MenuModule
>>>>>>> master
  ]
})
export class SettingsModule { }
