import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourGroupsComponent } from './your-groups.component';
import { YourGroupsShowComponent } from './your-groups-show.component';
import { YourGroupsRoutingModule } from './your-groups-routing.module';
import { YourGroupsDetailsComponent } from './your-groups-details/your-groups-details.component';
import { TableUsersGroupsComponent } from './your-groups-details/table-users-groups/table-users-groups.component';
import { ModalEventsCompletedComponent } from './your-groups-details/modal-events-completed/modal-events-completed.component';
import { ModalReportEventsGroupsOrganizerComponent } from './your-groups-details/modal-report-events-groups-organizer/modal-report-events-groups-organizer.component';
import { ModalEditGroupsComponent } from './your-groups-details/modal-edit-groups/modal-edit-groups.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalCreateEventComponent } from './your-groups-details/modal-create-event/modal-create-event.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalSourceUsersComponent } from './your-groups-details/modal-source-users/modal-source-users.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    YourGroupsComponent,
    YourGroupsShowComponent,
    YourGroupsDetailsComponent,
    TableUsersGroupsComponent,
    ModalEditGroupsComponent,
    ModalSourceUsersComponent,
    ModalEventsCompletedComponent,
    FilterPipe,

  ],
  imports: [
    CommonModule,
    YourGroupsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class YourGroupsModule { }
