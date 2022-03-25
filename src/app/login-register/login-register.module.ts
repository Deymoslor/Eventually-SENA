import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterRouterModule } from './login-register-router.module';
import { LoginRegisterComponent } from './login-register.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginnComponent } from './loginn/loginn.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SupplierRequestComponent } from './supplier-request/supplier-request.component';
import { SettingsModule } from '../main-home/settings/settings.module';

@NgModule({
  declarations: [
    LoginRegisterComponent,
    RegisterComponent,
    LoginComponent,
    LoginnComponent,
    SupplierRequestComponent
  ],
  imports: [
    CommonModule,
    LoginRegisterRouterModule,
    ReactiveFormsModule,
    FormsModule,
    SettingsModule
  ]
})
export class LoginRegisterModule { }
