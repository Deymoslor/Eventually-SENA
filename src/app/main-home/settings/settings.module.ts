import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { MenuModule } from 'src/app/menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestGroupsComponent } from './request-groups/request-groups.component';




@NgModule({
  declarations: [
    SettingsComponent,
    UpdateUserAccountComponent,
    UserAccountComponent,
    RequestGroupsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MenuModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
