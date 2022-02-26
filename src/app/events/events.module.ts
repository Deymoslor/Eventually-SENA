import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { ModalCreateEventComponent } from './modal-create-event/modal-create-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EventInComponent } from './event-in/event-in.component';
import { EventsRoutingModule } from './events-routing.module';
import { ModalResultComponent } from './event-in/modal-result/modal-result.component';

@NgModule({
  declarations: [EventsComponent,
    ModalCreateEventComponent,
    EventInComponent,
    ModalResultComponent,],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
