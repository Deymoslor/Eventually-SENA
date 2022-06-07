import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { LandingpageComponent } from './landingpage/landingpage.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent },
  {
    path: 'main',
    loadChildren: () => import('./main-home/main-home-routing.module').then(m => m.MainHomeRoutingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'loginRegister',
    loadChildren: () => import('./login-register/login-register-router.module').then(m => m.LoginRegisterRouterModule),
    //Llamamos a la guarda para revisar si está autenticado o no y darle paso o no.
    // canActivate: [NoAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
