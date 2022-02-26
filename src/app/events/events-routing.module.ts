import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component'; 
import { EventInComponent } from './event-in/event-in.component';


const routes: Routes = [
  {
    path: 'events', component:EventsComponent,
    children: [
      {path: 'event-in', component: EventInComponent}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class EventsRoutingModule { }
