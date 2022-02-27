import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrudEventsComponent } from './crud-events/crud-events.component';
import { CrudServicesComponent } from './crud-services/crud-services.component';


const routes: Routes = [
  {
    path: 'dashboard', component:DashboardComponent,
    children: [
      {path: 'events', component: CrudEventsComponent},
      {path: 'services', component: CrudServicesComponent}
    ]
  },
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
