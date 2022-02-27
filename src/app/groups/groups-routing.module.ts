import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';
import { SeeGroupsComponent } from './see-groups/see-groups.component';
import { RelatedGroupsComponent } from './related-groups/related-groups.component';
import { YourGroupsComponent } from './your-groups/your-groups.component';
import { CreateGroupsComponent } from './create-groups/create-groups.component';

const routes: Routes = [
  {
    path: 'groups',
    component:GroupsComponent,
    children: [
      {path: 'see-groups',
      component:SeeGroupsComponent},
    ],
  },
  {
    path: 'groups',
    component:GroupsComponent,
    children: [
      {path: 'related-groups',
      component:RelatedGroupsComponent},
    ]
  },
  {
    path: 'groups',
    component:GroupsComponent,
    children: [
      {path: 'your-groups',
      component:YourGroupsComponent},
    ]
  },
  {
    path: 'groups',
    component:GroupsComponent,
    children: [
      {path: 'create-group',
      component:CreateGroupsComponent},
    ]
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
