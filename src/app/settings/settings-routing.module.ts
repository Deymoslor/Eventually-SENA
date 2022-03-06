import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsLikeComponent } from './settings-like/settings-like.component';
<<<<<<< HEAD
import { SettingsReportComponent } from './settings-report/settings-report.component';
import { SettingsEventComponent } from './settings-event/settings-event.component';
=======
import { UpdateUserAccountComponent } from './update-user-account/update-user-account.component';
>>>>>>> master

const routes: Routes = [
  {
    path: 'settings', component:SettingsComponent,
    children: [
      {path: 'settings-like', component: SettingsLikeComponent},
<<<<<<< HEAD
      {path: 'settings-report', component: SettingsReportComponent},
      {path: 'settings-event', component: SettingsEventComponent}
=======
      {path: 'settings-account', component: UpdateUserAccountComponent},
>>>>>>> master
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})

<<<<<<< HEAD
export class SettingsRoutingModule { }
=======
export class SettingsroutingModule { }
>>>>>>> master
