import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
  checked = false;
  seasons: string[] = ['Presencial', 'Virtual'];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  editarPaciente(id:number){
    this.router.navigate(['editar',id]);
  }

}
