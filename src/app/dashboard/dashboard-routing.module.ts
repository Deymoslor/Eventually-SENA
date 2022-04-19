import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CrudEventsComponent } from './crud-events/crud-events.component';
import { CrudServicesComponent } from './crud-services/crud-services.component';
import { CrudLikesComponent } from './crud-likes/crud-likes.component';
import { CrudGroupsComponent } from './crud-groups/crud-groups.component';
import { CrudReportsComponent } from './crud-reports/crud-reports.component';
import { CrudUsersComponent } from './crud-users/crud-users.component';
import { CrudSuppliersComponent } from './crud-suppliers/crud-suppliers.component';
import { RequestsComponent } from './requests/requests.component';
import { CreateTypeServicesComponent } from './crud-services/create-type-services/create-type-services.component';
import { EventReportComponent } from './crud-reports/typeReport/event-report/event-report.component';
import { GroupReportComponent } from './crud-reports/typeReport/group-report/group-report.component';
import { UserReportComponent } from './crud-reports/typeReport/user-report/user-report.component';
import { AuthGuard } from '../core/guards/auth.guard';



const routes: Routes = [
  {
    path: 'dashboard', component:DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'events', component: CrudEventsComponent},
      {path: 'services', component: CrudServicesComponent},
      {path: 'likes', component: CrudLikesComponent},
      {path: 'groups', component: CrudGroupsComponent},
      {path: 'reports', component: CrudReportsComponent, children: [
        {path: 'event-report', component: EventReportComponent},
        {path: 'group-report', component: GroupReportComponent},
        {path: 'user-report', component: UserReportComponent},
      ]},
      {path: 'users', component: CrudUsersComponent},
      {path: 'suppliers', component: CrudSuppliersComponent},
      {path: 'requests', component: RequestsComponent},
      {path: 'createTypeServices', component: CreateTypeServicesComponent},
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
