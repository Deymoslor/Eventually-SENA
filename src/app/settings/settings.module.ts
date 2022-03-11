import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsEventComponent } from './settings-event/settings-event.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';
import { SettingsReportModule } from './settings-report/settings-report.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';




@NgModule({
  declarations: [
    SettingsComponent,
    SettingsEventComponent,
    UpdateUserAccountComponent
  ],
  imports: [
    CommonModule,
    SettingsReportModule,
    SettingsRoutingModule,
    MenuModule,
    FooterModule
  ],
})
export class SettingsModule { }
