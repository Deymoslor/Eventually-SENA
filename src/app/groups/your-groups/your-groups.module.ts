import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourGroupsComponent } from './your-groups.component';
import { YourGroupsShowComponent } from './your-groups-show.component';
import { YourGroupsRoutingModule } from './your-groups-routing.module';



@NgModule({
  declarations: [
    YourGroupsComponent,
    YourGroupsShowComponent
  ],
  imports: [
    CommonModule,
    YourGroupsRoutingModule
  ]
})
export class YourGroupsModule { }
