import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SeeGroupsComponent } from './see-groups.component';

const routes: Routes = [
  {
    path: '',
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
