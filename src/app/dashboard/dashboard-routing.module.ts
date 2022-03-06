import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrudEventsComponent } from './crud-events/crud-events.component';
import { CrudServicesComponent } from './crud-services/crud-services.component';
import { CrudLikesComponent } from './crud-likes/crud-likes.component';
import { CrudUsersComponent } from './crud-users/crud-users.component';
import { CrudSuppliersComponent } from './crud-suppliers/crud-suppliers.component';

const routes: Routes = [
  {
    path: 'dashboard', component:DashboardComponent,
    children: [
      {path: 'events', component: CrudEventsComponent},
      {path: 'services', component: CrudServicesComponent},
      {path: 'likes', component: CrudLikesComponent},
      {path: 'users', component: CrudUsersComponent},
      {path: 'suppliers', component: CrudSuppliersComponent}
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
