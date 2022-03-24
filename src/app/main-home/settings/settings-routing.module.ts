import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';
const routes: Routes = [
  {
    path: '',
    component:SettingsComponent,
    children: [
      {path: 'settings-account', component: UpdateUserAccountComponent},
      {
        path: '**',
        redirectTo: 'settings-account',
      }
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

export class SettingsRoutingModule { }
