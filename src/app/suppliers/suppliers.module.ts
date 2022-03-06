import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersRountingModule } from './suppliers-rounting.module';
import { SupplierServiceComponent } from './supplier-service/supplier-service.component';




@NgModule({
  declarations: [
    SupplierServiceComponent
  ],
  imports: [
    CommonModule,
    SuppliersRountingModule
  ]
})
export class SuppliersModule { }
