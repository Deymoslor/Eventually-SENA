import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent },
  {
    path: 'main',
    loadChildren: () => import('./main-home/main-home-routing.module').then(m => m.MainHomeRoutingModule),
  },
  {
    path: 'loginRegister',
    loadChildren: () => import('./login-register/login-register-router.module').then(m => m.LoginRegisterRouterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }