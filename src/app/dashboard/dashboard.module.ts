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
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [DashboardComponent,
    CrudEventsComponent,
    ModalEventsComponent,
    CrudServicesComponent,
    TableServicesComponent,
    TableTypeServicesComponent,
    CrudLikesComponent,
    ModalLikesComponent,
    ModalLikesComponent
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
