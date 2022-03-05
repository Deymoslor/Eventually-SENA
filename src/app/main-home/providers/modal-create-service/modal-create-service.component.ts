import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create-service',
  templateUrl: './modal-create-service.component.html',
  styleUrls: ['./modal-create-service.component.scss']
})
export class ModalCreateServiceComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number;} | undefined;

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

}

