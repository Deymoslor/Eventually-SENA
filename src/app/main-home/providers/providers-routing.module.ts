import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersComponent } from './providers.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { RESOURCE_BY_ROLES } from 'src/app/core/routes/internal.routes';


const routes: Routes = [
  {
    path: '', // /provider
    component: ProvidersComponent ,
    canActivate: [AuthGuard],
    data: {roles: RESOURCE_BY_ROLES.PANEL_PROVEEDOR},
    children: [
      {
        path: 'myService',
        component: MyServiceComponent,

      },
      {

        path: 'createService',
        component: CreateServiceComponent,
      },
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
