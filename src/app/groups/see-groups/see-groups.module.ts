import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeGroupsComponent } from './see-groups.component';
import { SeeGroupsShowComponent } from './see-groups-show.component';
import { SeeGroupsRoutingModule } from './see-groups-routing.module';
import { SeeGroupDetailComponent } from './see-group-detail/see-group-detail.component';



@NgModule({
  declarations: [
    SeeGroupsComponent,
    SeeGroupsShowComponent,
    SeeGroupDetailComponent],
  imports: [
    CommonModule,
    SeeGroupsRoutingModule
  ]
})
export class SeeGroupsModule { }
