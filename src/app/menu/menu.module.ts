import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TopHeaderComponent } from './top-header/top-header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { UserMenuComponent } from './user-menu/user-menu.component';



@NgModule({
  declarations: [
    TopHeaderComponent,
    LeftMenuComponent,
    UserMenuComponent
  ],
  exports:[
    TopHeaderComponent,
    LeftMenuComponent,
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
