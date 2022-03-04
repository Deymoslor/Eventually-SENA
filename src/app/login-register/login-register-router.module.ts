import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginRegisterComponent } from './login-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginnComponent } from './loginn/loginn.component';

const routes: Routes = [
  {
    path: 'loginRegister', component:LoginRegisterComponent,
    children: [
      {path: 'register', component: RegisterComponent},
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'loginn', component: LoginnComponent}
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
