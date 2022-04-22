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
    // canActivate: [NoAuthGuard],
    children: [
      {path: 'register', component: RegisterComponent},
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'supplier', component: SupplierRequestComponent}

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
