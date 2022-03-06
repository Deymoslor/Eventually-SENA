import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss']
})
export class ModalUsersComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number;} | undefined;

  constructor(
    private calendar:NgbCalendar
  ) { }

  ngOnInit(): void {
  }

}
