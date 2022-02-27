import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElementTService {
  position: number;
  nameTService: string;  
  state: string;
  actions: null;
}

const ELEMENT_DATATSERVICE: PeriodicElementTService[] = [
  {position: 1, nameTService: 'Futbol de calidad',state: '', actions:null},
  {position: 2, nameTService: 'Furbol2',state: '', actions:null},
  {position: 3, nameTService: 'RunescapeThings', state: '', actions:null},
  {position: 4, nameTService: 'Eventually',state: '', actions:null},
  {position: 5, nameTService: 'prueba', state: '', actions:null},
  {position: 6, nameTService: 'prueba', state: '', actions:null},
];

@Component({
  selector: 'app-table-type-services',
  templateUrl: './table-type-services.component.html',
  styleUrls: ['./table-type-services.component.scss']
})
export class TableTypeServicesComponent implements OnInit {

  displayedColumnsTService: string[] = ['position', 'nameTService','state', 'actions'];
  dataTSource = new MatTableDataSource(ELEMENT_DATATSERVICE); 

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataTSource.paginator = this.paginator;
  }

}
