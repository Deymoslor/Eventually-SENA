import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { ModalCreateEventComponent } from './modal-create-event/modal-create-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventsComponent,
    ModalCreateEventComponent,],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
    
  ]
})
export class EventsModule { }
