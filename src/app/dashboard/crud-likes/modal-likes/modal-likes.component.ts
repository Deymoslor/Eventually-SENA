import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-likes',
  templateUrl: './modal-likes.component.html',
  styleUrls: ['./modal-likes.component.scss']
})
export class ModalLikesComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number;} | undefined;

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

}
