import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsroutingModule } from './settings-routing.module';
import { SettingsLikeComponent } from './settings-like/settings-like.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';
import { SettingsComponent } from './settings.component';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    SettingsComponent,//veremos
    SettingsLikeComponent,
    UpdateUserAccountComponent
  ],
  imports: [
    CommonModule,
    SettingsroutingModule,
    MenuModule
  ]
})
export class SettingsModule { }
