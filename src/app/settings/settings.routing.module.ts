import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsLikeComponent } from './settings-like/settings-like.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';

const routes: Routes = [
  {
    path: 'settings', component:SettingsComponent,
    children: [
      {path: 'settings-like', component: SettingsLikeComponent},
      // {path: 'settings-account', component: UpdateUserAccountComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})

export class SettingsroutingModule { }
