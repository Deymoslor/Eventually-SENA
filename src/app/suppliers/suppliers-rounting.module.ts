import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersComponent } from './suppliers.component';
import { SupplierServiceComponent } from './supplier-service/supplier-service.component';

const routes: Routes = [
  {
    path: 'suppliers', component:SuppliersComponent,
    children: [
      // {path: '', component: SupplierServiceComponent},
      {path: 'supplier-service', component:SupplierServiceComponent}
    ]

  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SuppliersRountingModule { }
