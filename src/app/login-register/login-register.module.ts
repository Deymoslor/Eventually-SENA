import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterRouterModule } from './login-register-router.module';
import { LoginRegisterComponent } from './login-register.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SupplierRequestComponent } from './supplier-request/supplier-request.component';
import { SettingsModule } from '../main-home/settings/settings.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangeEmailComponent } from './change-email/change-email.component';

@NgModule({
  declarations: [
    LoginRegisterComponent,
    RegisterComponent,
    LoginComponent,
    SupplierRequestComponent,
    ForgotPasswordComponent,
    ChangeEmailComponent
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
