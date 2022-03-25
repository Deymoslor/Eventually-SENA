import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { MenuModule } from 'src/app/menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SettingsComponent,
    UpdateUserAccountComponent
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
