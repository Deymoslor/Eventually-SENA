import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { ModalCreateEventComponent } from './modal-create-event/modal-create-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventInComponent } from './event-in/event-in.component';
import { EventsRoutingModule } from './events-routing.module';
import { ModalResultComponent } from './event-in/modal-result/modal-result.component';
import { ModalEditComponent } from './event-in/modal-edit/modal-edit.component';
import { ModalDisableEventComponent } from './event-in/modal-disable-event/modal-disable-event.component';
import { EventProviderComponent } from './event-in/event-provider/event-provider.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalProviderInfoComponent } from './event-in/modal-provider-info/modal-provider-info.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';



@NgModule({
  declarations: [EventsComponent,
    ModalCreateEventComponent,
    EventInComponent,
    ModalResultComponent,
    ModalDisableEventComponent,
    EventProviderComponent,
    ModalProviderInfoComponent,
    ModalEditComponent,],
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
    MatFormFieldModule
  ]
})
export class EventsModule { }
