import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';
import { RelatedGroupsDetailsComponent } from './related-groups/related-groups-details/related-groups-details.component';
import { SeeGroupDetailComponent } from './see-groups/see-group-detail/see-group-detail.component';
import { YourGroupsDetailsComponent } from './your-groups/your-groups-details/your-groups-details.component';

const routes: Routes = [
  {
    path: '', // /groups
    component: GroupsComponent ,
    children: [
      {
        path: 'create-group',
        loadChildren: () => import('./create-groups/create-groups-routing.module').then(m => m.CreateGroupsRoutingModule),
      },
      {
        path: 'related-groups',
        loadChildren: () => import('./related-groups/related-groups-routing.module').then(m => m.RelatedGroupsRoutingModule),
      },
      {
        path: 'see-groups',
        loadChildren: () => import('./see-groups/see-groups-routing.module').then(m => m.SeeGroupsRoutingModule),
      },
      {
        path: 'your-groups',
        loadChildren: () => import('./your-groups/your-groups-routing.module').then(m => m.YourGroupsRoutingModule),
      },

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
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
