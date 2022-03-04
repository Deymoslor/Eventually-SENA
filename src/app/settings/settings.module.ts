import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsroutingModule } from './settings.routing.module';//imp
import { SettingsLikeComponent } from './settings-like/settings-like.component';
import { SettingsComponent } from './settings.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SettingsLikeComponent,
    UpdateUserAccountComponent
  ],
  imports: [
    CommonModule,
    SettingsroutingModule,
    UpdateUserAccountComponent
  ]
})
export class SettingsModule { }
