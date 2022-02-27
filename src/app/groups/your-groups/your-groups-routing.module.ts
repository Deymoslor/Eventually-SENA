import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YourGroupsComponent } from './your-groups.component';

const routes: Routes = [
  {
    path:'your-groups',
    component:YourGroupsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class YourGroupsRoutingModule { }
