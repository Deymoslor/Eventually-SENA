import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsLikeComponent } from './settings-like/settings-like.component';
import { MenuModule } from '../menu/menu.module';
import { SettingsRoutingModule } from './settings-routing.module';



@NgModule({
  declarations: [
    SettingsComponent,
    SettingsLikeComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
