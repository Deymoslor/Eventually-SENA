import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElementService {
  position: number;
  nameEvent: string;  
  description: string;
  typeEvent: string;
  date: string;
  actions: null;
}

const ELEMENT_DATASERVICE: PeriodicElementService[] = [
  {position: 1, nameEvent: 'Futbol de calidad', description: 'ENSEÑANZA DE FUTBOL A NIVEL INCREIBLES', typeEvent: 'Deportes', date: '06/06/2023', actions:null},
  {position: 2, nameEvent: 'Furbol2', description: 'Grupo de futbol especializado en el balon pero mas que el otro XD', typeEvent: 'He', date: '', actions:null},
  {position: 3, nameEvent: 'RunescapeThings', description: 'Grupo creado para los amantes del Runescape, osea literalmente nadie.', typeEvent: 'Li', date: '', actions:null},
  {position: 4, nameEvent: 'Eventually', description: 'El primer grupo de todos, el grupo mas capo literalmente.', typeEvent: 'Be', date: '', actions:null},
  {position: 5, nameEvent: 'prueba', description: 'prueba', typeEvent: 'B', date: '', actions:null},
  {position: 6, nameEvent: 'prueba', description: 'prueba', typeEvent: 'C', date: '', actions:null},
];

@Component({
  selector: 'app-table-request-event',
  templateUrl: './table-request-event.component.html',
  styleUrls: ['./table-request-event.component.scss']
})
export class TableRequestEventComponent implements OnInit {

  displayedColumnsService: string[] = ['position', 'nameEvent', 'description', 'typeEvent', 'date', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATASERVICE); 

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
