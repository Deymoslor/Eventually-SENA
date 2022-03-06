import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';
import { SeeGroupsComponent } from './see-groups/see-groups.component';
import { RelatedGroupsComponent } from './related-groups/related-groups.component';
import { YourGroupsComponent } from './your-groups/your-groups.component';
import { CreateGroupsComponent } from './create-groups/create-groups.component';
import { RelatedGroupsDetailsComponent } from './related-groups/related-groups-details/related-groups-details.component';
import { SeeGroupDetailComponent } from './see-groups/see-group-detail/see-group-detail.component';
import { YourGroupsDetailsComponent } from './your-groups/your-groups-details/your-groups-details.component';

const routes: Routes = [
  {
    path: 'groups',
    component:GroupsComponent,
    children: [
      {path: 'see-groups',
      component:SeeGroupsComponent},
      {path: 'related-groups',
      component:RelatedGroupsComponent},
      {path: 'your-groups',
      component:YourGroupsComponent},
      {path: 'create-group',
      component:CreateGroupsComponent},
      {
        path: 'related-groups/:id',
        component: RelatedGroupsDetailsComponent
      },
      {
        path: 'see-groups/show/:id',
        component: SeeGroupDetailComponent,
      },
      {
        path: 'your-groups/groups/:id',
        component: YourGroupsDetailsComponent,
      },
    ],
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
