import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SeeGroupsComponent } from './see-groups.component';
import { SeeGroupDetailComponent } from "./see-group-detail/see-group-detail.component";

const routes: Routes = [
  {
    path: 'see-groups',
    component: SeeGroupsComponent,
  },
  {
    path: 'see-groups/show/detail',
    component: SeeGroupDetailComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SeeGroupsRoutingModule { }
