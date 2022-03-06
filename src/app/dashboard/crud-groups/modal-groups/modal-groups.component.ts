import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-groups',
  templateUrl: './modal-groups.component.html',
  styleUrls: ['./modal-groups.component.scss']
})
export class ModalGroupsComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: {year: number; month: number;} | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
