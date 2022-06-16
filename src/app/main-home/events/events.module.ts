import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { ModalCreateEventComponent } from './modal-create-event/modal-create-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventInComponent } from './event-in/event-in.component';
import { EventsRoutingModule } from './events-routing.module';
import { ModalResultComponent } from './event-in/modal-result/modal-result.component';
import { ModalDisableEventComponent } from './event-in/modal-disable-event/modal-disable-event.component';
import { EventProviderComponent } from './event-in/event-provider/event-provider.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalProviderInfoComponent } from './event-in/modal-provider-info/modal-provider-info.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { EditEventComponent } from './event-in/edit-event/edit-event.component';
import { FilterEventsPipe } from './event-in/event-provider/pipe/filter-events.pipe';
import { ModalInfoSerProvComponent } from './event-in/event-provider/modal-info-ser-prov/modal-info-ser-prov.component';
import {NgxPaginationModule} from 'ngx-pagination'


@NgModule({
  declarations: [EventsComponent,
    ModalCreateEventComponent,
    EventInComponent,
    ModalResultComponent,
    ModalDisableEventComponent,
    EventProviderComponent,
    ModalProviderInfoComponent,
    EditEventComponent,
    FilterEventsPipe,
    ModalInfoSerProvComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    EventsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgxPaginationModule
  ]
})
export class EventsModule { }
