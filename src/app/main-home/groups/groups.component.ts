import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  constructor(

    private authService: AuthService,

  ) { }

  ngOnInit(): void {

    let rolEncriptado = localStorage.getItem('nombreRol');

    console.log(this.authService.desencriptar(rolEncriptado));

  }

}
