import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedGroupsComponent } from './related-groups.component';
import { RelatedGroupsRoutingModule } from './related-groups-routing.module';
import { RelatedGroupsShowComponent } from './related-groups-show.component';



@NgModule({
  declarations: [
    RelatedGroupsComponent,
    RelatedGroupsShowComponent
  ],
  imports: [
    CommonModule,
    RelatedGroupsRoutingModule
  ]
})
export class RelatedGroupsModule { }
