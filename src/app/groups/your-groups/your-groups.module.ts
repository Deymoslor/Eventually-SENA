import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourGroupsComponent } from './your-groups.component';
import { YourGroupsShowComponent } from './your-groups-show.component';
import { YourGroupsRoutingModule } from './your-groups-routing.module';
import { YourGroupsDetailsComponent } from './your-groups-details/your-groups-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableUsersGroupsComponent } from './your-groups-details/table-users-groups/table-users-groups.component';



@NgModule({
  declarations: [
    YourGroupsComponent,
    YourGroupsShowComponent,
    YourGroupsDetailsComponent,
    TableUsersGroupsComponent,
  ],
  imports: [
    CommonModule,
    YourGroupsRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class YourGroupsModule { }
