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
  }

}
