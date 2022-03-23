import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventInComponent } from './event-in/event-in.component';
import { EditEventComponent } from './event-in/edit-event/edit-event.component';


const routes: Routes = [
  {
    path: 'events', component:EventsComponent,
    children: [
      {path: 'event-in/:id', component: EventInComponent}
  
]
  },
  {path: 'edit/:idE', component: EditEventComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class EventsRoutingModule { }
