import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../events/dashboard/dashboard.component';
import { CrudEventsComponent } from '../events/dashboard/crud-events/crud-events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent,
    CrudEventsComponent,],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
