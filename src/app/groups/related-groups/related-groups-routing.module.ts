import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RelatedGroupsComponent } from './related-groups.component';

const routes: Routes = [
  {
    path: 'related-groups',
    component: RelatedGroupsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RelatedGroupsRoutingModule { }
