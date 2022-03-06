import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedGroupsComponent } from './related-groups.component';
import { RelatedGroupsRoutingModule } from './related-groups-routing.module';
import { RelatedGroupsShowComponent } from './related-groups-show.component';
import { RelatedGroupsDetailsComponent } from './related-groups-details/related-groups-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RelatedGroupsComponent,
    RelatedGroupsShowComponent,
    RelatedGroupsDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RelatedGroupsRoutingModule
  ]
})
export class RelatedGroupsModule { }
