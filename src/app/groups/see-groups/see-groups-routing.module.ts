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
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SeeGroupsRoutingModule { }
