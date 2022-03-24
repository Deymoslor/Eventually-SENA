import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateGroupsComponent } from './create-groups.component';

const routes: Routes = [
  {
    path: '',
    component:CreateGroupsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports: [RouterModule]
})
export class CreateGroupsRoutingModule { }
