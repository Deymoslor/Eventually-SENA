import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginRegisterComponent } from './login-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SupplierRequestComponent } from './supplier-request/supplier-request.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { NoAuthGuard } from '../core/guards/no-auth.guard';

const routes: Routes = [
  {
    path: '', component:LoginRegisterComponent,
    children: [
      {path: 'register', component: RegisterComponent,canActivate: [NoAuthGuard],},
      {path: '', component: LoginComponent,canActivate: [NoAuthGuard],},
      {path: 'login', component: LoginComponent,canActivate: [NoAuthGuard],},
      {path: 'forgot-password', component: ForgotPasswordComponent,canActivate: [AuthGuard]},
      {path: 'supplier', component: SupplierRequestComponent,canActivate: [NoAuthGuard],}

    ]

  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LoginRegisterRouterModule { }
