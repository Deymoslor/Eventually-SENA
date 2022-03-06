import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterRouterModule } from './login-register-router.module';
import { LoginRegisterComponent } from './login-register.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginnComponent } from './loginn/loginn.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SupplierRequestComponent } from './supplier-request/supplier-request.component';

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
    FormsModule
  ]
})
export class LoginRegisterModule { }
