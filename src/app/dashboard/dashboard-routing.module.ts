import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../events/dashboard/dashboard.component';
import { CrudEventsComponent } from '../events/dashboard/crud-events/crud-events.component';

const routes: Routes = [
  {
    path: 'dashboard', component:DashboardComponent,
    children: [
      {path: 'events', component: CrudEventsComponent}
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
export class DashboardRoutingModule { }
