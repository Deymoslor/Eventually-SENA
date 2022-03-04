import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MainHomeComponent } from './main-home.component';
import { MainHomeRoutingModule } from './main-home-routing.module';
import { ProvidersComponent } from './providers/providers.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@NgModule({
  declarations: [MainHomeComponent, ProvidersComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    MainHomeRoutingModule,
    MatPaginator,
    MatTableDataSource,
  ]
})
export class MainHomeModule { }
