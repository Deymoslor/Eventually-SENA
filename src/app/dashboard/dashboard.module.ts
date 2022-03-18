import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CrudEventsComponent } from './crud-events/crud-events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalEventsComponent } from './crud-events/modal-events/modal-events.component';
import { CrudServicesComponent } from './crud-services/crud-services.component';
import { TableServicesComponent } from './crud-services/table-services/table-services.component';
import { TableTypeServicesComponent } from './crud-services/table-type-services/table-type-services.component';
import { CrudLikesComponent } from './crud-likes/crud-likes.component';
import { ModalLikesComponent } from './crud-likes/modal-likes/modal-likes.component';
import { MenuModule } from '../menu/menu.module';
import { CrudUsersComponent } from './crud-users/crud-users.component';
import { ModalUsersComponent } from './crud-users/modal-users/modal-users.component';
import { CrudSuppliersComponent } from './crud-suppliers/crud-suppliers.component';
import { ModalSuppliersComponent } from './crud-suppliers/modal-suppliers/modal-suppliers.component';
import { ModalReportsComponent } from './crud-reports/modal-reports/modal-reports.component';
import { CrudReportsComponent } from './crud-reports/crud-reports.component';
import { ModalGroupsComponent } from './crud-groups/modal-groups/modal-groups.component';
import { CrudGroupsComponent } from './crud-groups/crud-groups.component';
import { RequestsComponent } from './requests/requests.component';
import { TableRequestGroupsComponent } from './requests/table-request-groups/table-request-groups.component';
import { TableRequestEventComponent } from './requests/table-request-event/table-request-event.component';
import { ModalEditGroupsComponent } from './crud-groups/modal-edit-groups/modal-edit-groups.component';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    DashboardComponent,
    CrudEventsComponent,
    ModalEventsComponent,
    CrudServicesComponent,
    TableServicesComponent,
    TableTypeServicesComponent,
    CrudLikesComponent,
    ModalLikesComponent,
    CrudGroupsComponent,
    ModalGroupsComponent,
    CrudReportsComponent,
    ModalReportsComponent,
    CrudUsersComponent,
    ModalUsersComponent,
    CrudSuppliersComponent,
    ModalSuppliersComponent,
    RequestsComponent,
    TableRequestGroupsComponent,
    TableRequestEventComponent,
    ModalEditGroupsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MenuModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ]
})
export class DashboardModule { }
