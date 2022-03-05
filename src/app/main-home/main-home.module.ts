import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MainHomeComponent } from './main-home.component';
import { MainHomeRoutingModule } from './main-home-routing.module';
import { ProvidersComponent } from './providers/providers.component';
import { ModalCheckEventComponent } from './providers/modal-check-event/modal-check-event.component';
import { ModalCreateServiceComponent } from './providers/modal-create-service/modal-create-service.component';
import { TableInvitationsEventsComponent } from './providers/table/table-invitations-events/table-invitations-events.component';
import { ModalEditServiceComponent } from './providers/modal-edit-service/modal-edit-service.component';

@NgModule({
  declarations: [MainHomeComponent, ProvidersComponent, ModalCheckEventComponent, ModalCreateServiceComponent, TableInvitationsEventsComponent, ModalEditServiceComponent,],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    MainHomeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class MainHomeModule { }
