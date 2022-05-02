import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { YourGroupsDetailsComponent } from './your-groups/your-groups-details/your-groups-details.component';
import { AuthService } from 'src/app/core/service/auth.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  template: 'Mesage: <app-your-groups-details></app-your-groups-details>',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  @ViewChild(YourGroupsDetailsComponent) child;

  id: number | undefined;

  constructor(

    private authService: AuthService,

  ) { }

  ngOnInit(): void {
    let rolEncriptado = localStorage.getItem('nombreRol');
    console.log(this.authService.desencriptar(rolEncriptado));
    this.id = this.child;
    console.log(this.id);
    console.log(this.child);
  }

}



