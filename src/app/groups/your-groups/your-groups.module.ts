import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourGroupsComponent } from './your-groups.component';
import { YourGroupsShowComponent } from './your-groups-show.component';
import { YourGroupsRoutingModule } from './your-groups-routing.module';
import { YourGroupsDetailsComponent } from './your-groups-details/your-groups-details.component';
import { ModalEditGroupsComponent } from './your-groups-details/modal-edit-groups/modal-edit-groups.component';



@NgModule({
  declarations: [
    YourGroupsComponent,
    YourGroupsShowComponent,
    YourGroupsDetailsComponent,
    ModalEditGroupsComponent
  ],
  imports: [
    CommonModule,
    YourGroupsRoutingModule
  ]
})
export class YourGroupsModule { }
