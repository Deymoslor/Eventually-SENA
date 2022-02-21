import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  model!: NgbDateStruct;
  checked = false;
  date!: {year: number, month: number};
  seasons: string[] = ['Presencial', 'Virtual'];
  constructor(private modalService: NgbModal, private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
  
  openScrollableContent(longContent:any) {
    this.modalService.open(longContent, { scrollable: true, size: 'xl'});
  }

}
