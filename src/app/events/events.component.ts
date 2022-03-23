import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
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

  //Acceder al evento. El parametro es el id del grupo.
  inEvent(idGroup:number){
    this.router.navigate(['events/event-in',idGroup]);
  }

}
