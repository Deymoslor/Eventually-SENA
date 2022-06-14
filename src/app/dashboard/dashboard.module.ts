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
import { ModalSuppliersCreateComponent } from './crud-suppliers/modal-suppliers-create/modal-suppliers-create.component';
import { ModalSuppliersEditComponent } from './crud-suppliers/modal-suppliers-edit/modal-suppliers-edit.component';
import { ModalReportsComponent } from './crud-reports/modal-reports/modal-reports.component';
import { CrudReportsComponent } from './crud-reports/crud-reports.component';
import { ModalGroupsComponent } from './crud-groups/modal-groups/modal-groups.component';
import { CrudGroupsComponent } from './crud-groups/crud-groups.component';
import { RequestsComponent } from './requests/requests.component';
import { TableRequestGroupsComponent } from './requests/table-request-groups/table-request-groups.component';
import { TableRequestEventComponent } from './requests/table-request-event/table-request-event.component';
import { ModalEditLikesComponent } from './crud-likes/modal-edit-likes/modal-edit-likes.component';
import { ModalEditEventsComponent } from './crud-events/modal-edit-events/modal-edit-events.component';
import { ModalEditGroupsComponent } from './crud-groups/modal-edit-groups/modal-edit-groups.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CreateTypeServicesComponent } from './crud-services/create-type-services/create-type-services.component';
import { EventReportComponent } from './crud-reports/typeReport/event-report/event-report.component';
import { GroupReportComponent } from './crud-reports/typeReport/group-report/group-report.component';
import { UserReportComponent } from './crud-reports/typeReport/user-report/user-report.component';
import { FooterModule } from '../footer/footer.module';
import { DatailGroupComponent } from './requests/table-request-groups/datail-group/datail-group.component';
import { DatailEventComponent } from './requests/table-request-event/datail-event/datail-event.component';
import { LandingAdminComponent } from './landing-admin/landing-admin.component';



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
    ModalSuppliersCreateComponent,
    ModalSuppliersEditComponent,
    RequestsComponent,
    TableRequestGroupsComponent,
    TableRequestEventComponent,
    ModalEditLikesComponent,
    ModalEditGroupsComponent,
    ModalEditEventsComponent,
    CreateTypeServicesComponent,
    EventReportComponent,
    GroupReportComponent,
    UserReportComponent,
    DatailGroupComponent,
    DatailEventComponent,
    LandingAdminComponent

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
    FooterModule
  ]
})
export class DashboardModule { }
