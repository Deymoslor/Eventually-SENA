import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsroutingModule } from './settings.routing.module';//imp
import { SettingsLikeComponent } from './settings-like/settings-like.component';
import { SettingsComponent } from './settings.component';



@NgModule({
  declarations: [
    SettingsComponent,
    SettingsLikeComponent
  ],
  imports: [
    CommonModule,
    SettingsroutingModule
  ]
})
export class SettingsModule { }
