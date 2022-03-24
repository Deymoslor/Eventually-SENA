import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YourGroupsComponent } from './your-groups.component';

const routes: Routes = [
  {
    path:'',
    component:YourGroupsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class YourGroupsRoutingModule { }
