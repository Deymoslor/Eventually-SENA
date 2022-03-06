import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsLikeComponent } from './settings-like/settings-like.component';
import { SettingsEventComponent } from './settings-event/settings-event.component';
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';
import { SettingsReportComponent } from './settings-report/settings-report.component';
const routes: Routes = [
  {
    path: 'settings', component:SettingsComponent,
    children: [
      {path: 'settings-like', component: SettingsLikeComponent},
      {path: 'settings-report', component: SettingsReportComponent},
      {path: 'settings-event', component: SettingsEventComponent},
      {path: 'settings-account', component: UpdateUserAccountComponent},
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
