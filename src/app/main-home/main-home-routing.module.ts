import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home.component';
import { ProvidersComponent } from './providers/providers.component';



const routes: Routes = [
  {
    path: 'main', component:MainHomeComponent,
    children: [
      {path: 'provider', component:ProvidersComponent},
      
    ]
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class MainHomeRoutingModule { }
