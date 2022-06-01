import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { RequestGroupsComponent } from './request-groups/request-groups.component';

const routes: Routes = [
  {
    path: '',
    component:SettingsComponent,
    children: [
      {path: 'user-account', component: UserAccountComponent},
      {path: 'settings-account', component: UpdateUserAccountComponent},
      {path: 'request-groups', component: RequestGroupsComponent},
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
