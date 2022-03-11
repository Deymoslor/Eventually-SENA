import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterRoutingModule } from './fooder-routing.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  exports:[
  FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ]
})
export class FooterModule { }
