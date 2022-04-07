import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-check-event',
  templateUrl: './modal-check-event.component.html',
  styleUrls: ['./modal-check-event.component.scss']
})
export class ModalCheckEventComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number;} | undefined;

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

}
