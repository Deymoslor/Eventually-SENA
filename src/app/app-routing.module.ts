import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsLikeComponent } from './settings/settings-like/settings-like.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: 'settings', component:SettingsComponent,
    children: [
      {path: 'settings-like', component: SettingsLikeComponent},
      
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
