import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
  checked = false;
  seasons: string[] = ['Presencial', 'Virtual'];
  constructor() { }

  ngOnInit(): void {
  }

}
