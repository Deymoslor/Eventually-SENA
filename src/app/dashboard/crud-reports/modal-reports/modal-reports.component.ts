import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-reports',
  templateUrl: './modal-reports.component.html',
  styleUrls: ['./modal-reports.component.scss']
})
export class ModalReportsComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: {year: number; month: number;} | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert('El reporte se a generado exitosamente');
  }

}
