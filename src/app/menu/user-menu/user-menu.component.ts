import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent{
  buttonUser ="Info"
  btnNoti(){
    this.buttonUser ='noti'
  }
  btnInfo(){
    this.buttonUser ='Info'
  }

}
