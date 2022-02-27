import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterRouterModule } from './login-register-router.module';
import { LoginRegisterComponent } from './login-register.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginRegisterComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRegisterRouterModule,
    ReactiveFormsModule
  ]
})
export class LoginRegisterModule { }
