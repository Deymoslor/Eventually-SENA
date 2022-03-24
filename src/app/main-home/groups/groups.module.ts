import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeeGroupsModule } from './see-groups/see-groups.module';

import { GroupsComponent } from './groups.component';

import { GroupsRoutingModule } from './groups-routing.module';

import { RelatedGroupsModule } from './related-groups/related-groups.module';
import { YourGroupsModule } from './your-groups/your-groups.module';
import { CreateGroupsModule } from './create-groups/create-groups.module';
import { NavGroupComponent } from './nav-group/nav-group.component';
import { ModalEditGroupsComponent } from './your-groups/your-groups-details/modal-edit-groups/modal-edit-groups.component';
import { ModalEventsCompletedComponent } from './your-groups/your-groups-details/modal-events-completed/modal-events-completed.component';
import { ModalReportEventsGroupsOrganizerComponent } from './your-groups/your-groups-details/modal-report-events-groups-organizer/modal-report-events-groups-organizer.component';
import { MenuModule } from 'src/app/menu/menu.module';


@NgModule({
  declarations: [
    GroupsComponent,
    NavGroupComponent,
    ModalEditGroupsComponent,
    ModalEventsCompletedComponent,
    ModalReportEventsGroupsOrganizerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SeeGroupsModule,
    RelatedGroupsModule,
    YourGroupsModule,
    GroupsRoutingModule,
    CreateGroupsModule,
    MenuModule,
    
    
  ]
})
export class GroupsModule { }
