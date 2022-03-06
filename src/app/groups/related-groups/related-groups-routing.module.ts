import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RelatedGroupsComponent } from './related-groups.component';
import { RelatedGroupsDetailsComponent } from './related-groups-details/related-groups-details.component';

const routes: Routes = [
  {
    path: 'related-groups',
    component: RelatedGroupsComponent
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
export class RelatedGroupsRoutingModule { }
