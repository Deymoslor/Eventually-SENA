import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-suppliers',
  templateUrl: './modal-suppliers.component.html',
  styleUrls: ['./modal-suppliers.component.scss']
})
export class ModalSuppliersComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number;} | undefined;

  constructor(

    private calendar:NgbCalendar

  ) { }

  ngOnInit(): void {
  }

}
