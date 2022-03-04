import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MainHomeComponent } from './main-home.component';
import { MainHomeRoutingModule } from './main-home-routing.module';
import { ProvidersComponent } from './providers/providers.component';

@NgModule({
  declarations: [MainHomeComponent, ProvidersComponent,],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    MainHomeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class MainHomeModule { }
