import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedGroupsComponent } from './related-groups.component';
import { RelatedGroupsRoutingModule } from './related-groups-routing.module';
import { RelatedGroupsShowComponent } from './related-groups-show.component';
import { RelatedGroupsDetailsComponent } from './related-groups-details/related-groups-details.component';
import { RouterModule } from '@angular/router';
import { TableUsersRelatedComponent } from './related-groups-details/table-users-related/table-users-related.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    RelatedGroupsComponent,
    RelatedGroupsShowComponent,
    RelatedGroupsDetailsComponent,
    TableUsersRelatedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RelatedGroupsRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class RelatedGroupsModule { }
