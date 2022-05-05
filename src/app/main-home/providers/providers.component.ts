import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  
  constructor( private auth: AuthService) { }

  ngOnInit(): void {
    let rolNom = localStorage.setItem('nombreRol',this.auth.encriptar("PROVEEDOR"));
    let idProv = localStorage.setItem('id', this.auth.encriptar("1"));
  }

}
