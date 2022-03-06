import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';


const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'settings', component:SettingsComponent,
    children: [
      {path: 'settings-like', component: SettingsLikeComponent},

    ]

  },
=======
>>>>>>> master
  {path: '', component:LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }