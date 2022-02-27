import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeeGroupsModule } from './see-groups/see-groups.module';

import { GroupsComponent } from './groups.component';
import { NavGroupComponent } from './nav-group/nav-group.component';

import { GroupsRoutingModule } from './groups-routing.module';

import { RelatedGroupsModule } from './related-groups/related-groups.module';
import { YourGroupsModule } from './your-groups/your-groups.module';
import { CreateGroupsModule } from './create-groups/create-groups.module';



@NgModule({
  declarations: [
    GroupsComponent,
    NavGroupComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SeeGroupsModule,
    RelatedGroupsModule,
    YourGroupsModule,
    GroupsRoutingModule,
    CreateGroupsModule
  ]
})
export class GroupsModule { }
