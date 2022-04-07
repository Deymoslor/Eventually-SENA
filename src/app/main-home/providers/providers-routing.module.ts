import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersComponent } from './providers.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { CreateServiceComponent } from './create-service/create-service.component';


const routes: Routes = [
  {
    path: '', // /provider
    component: ProvidersComponent ,
    children: [
      {
        path: 'myService',
        component: MyServiceComponent
      },
      {

        path: 'createService',
        component: CreateServiceComponent,
      },
    //   {
    //     path: 'see-groups',
    //     loadChildren: () => import('./see-groups/see-groups-routing.module').then(m => m.SeeGroupsRoutingModule),
    //   },
    //   {
    //     path: 'your-groups',
    //     loadChildren: () => import('./your-groups/your-groups-routing.module').then(m => m.YourGroupsRoutingModule),
    //   },

    //   {
    //     path: 'related-groups/:id',
    //     component: RelatedGroupsDetailsComponent
    //   },
    //   {
    //     path: 'see-groups/show/:id',
    //     component: SeeGroupDetailComponent,
    //   },
    //   {
    //     path: 'your-groups/groups/:id',
    //     component: YourGroupsDetailsComponent,
    //   },
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
export class ProvidersRoutingModule { }
