import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent },
  {
    path: 'main',
    loadChildren: () => import('./main-home/main-home-routing.module').then(m => m.MainHomeRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }