import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGroupsComponent } from './create-groups.component';
import { CreateGroupsRoutingModule } from './create-groups-routing.module';



@NgModule({
  declarations: [
    CreateGroupsComponent
  ],
  imports: [
    CommonModule,
    CreateGroupsRoutingModule
  ]
})
export class CreateGroupsModule { }
