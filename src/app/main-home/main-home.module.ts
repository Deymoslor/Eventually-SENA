import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home.component';
import { MainHomeRoutingModule } from './main-home-routing.module';
import { ProvidersComponent } from './providers/providers.component';




@NgModule({
  declarations: [MainHomeComponent, ProvidersComponent],
  imports: [
    CommonModule,
    MainHomeRoutingModule
  ]
})
export class MainHomeModule { }
