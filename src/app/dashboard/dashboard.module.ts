import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CrudEventsComponent } from './crud-events/crud-events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalEventsComponent } from './crud-events/modal-events/modal-events.component';
import { CrudServicesComponent } from './crud-services/crud-services.component';
import { TableServicesComponent } from './crud-services/table-services/table-services.component';
import { TableTypeServicesComponent } from './crud-services/table-type-services/table-type-services.component';
import { CrudLikesComponent } from './crud-likes/crud-likes.component';
import { ModalLikesComponent } from './crud-likes/modal-likes/modal-likes.component';
<<<<<<< HEAD
import { CrudGroupsComponent } from './crud-groups/crud-groups.component';
import { ModalGroupsComponent } from './crud-groups/modal-groups/modal-groups.component';
import { CrudReportsComponent } from './crud-reports/crud-reports.component';
import { ModalReportsComponent } from './crud-reports/modal-reports/modal-reports.component';
=======
import { MenuModule } from '../menu/menu.module';
import { CrudUsersComponent } from './crud-users/crud-users.component';
import { ModalUsersComponent } from './crud-users/modal-users/modal-users.component';
import { CrudSuppliersComponent } from './crud-suppliers/crud-suppliers.component';
import { ModalSuppliersComponent } from './crud-suppliers/modal-suppliers/modal-suppliers.component';

>>>>>>> master

@NgModule({
  declarations: [DashboardComponent,
    CrudEventsComponent,
    ModalEventsComponent,
    CrudServicesComponent,
    TableServicesComponent,
    TableTypeServicesComponent,
    CrudLikesComponent,
    ModalLikesComponent,
<<<<<<< HEAD
    ModalLikesComponent,
    CrudGroupsComponent,
    ModalGroupsComponent,
    CrudReportsComponent,
    ModalReportsComponent
=======
    CrudUsersComponent,
    ModalUsersComponent,
    CrudSuppliersComponent,
    ModalSuppliersComponent
>>>>>>> master
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MenuModule
  ]
})
export class DashboardModule { }
