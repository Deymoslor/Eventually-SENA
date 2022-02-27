import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElementService {
  position: number;
  nameService: string;  
  description: string;
  TypeService: string;
  nameProvider: string;
  state: string;
  actions: null;
}

const ELEMENT_DATASERVICE: PeriodicElementService[] = [
  {position: 1, nameService: 'Futbol de calidad', description: 'ENSEÑANZA DE FUTBOL A NIVEL INCREIBLES', TypeService: 'Deportes', nameProvider: 'Dylan Malumaniatico', state: '', actions:null},
  {position: 2, nameService: 'Furbol2', description: 'Grupo de futbol especializado en el balon pero mas que el otro XD', TypeService: 'He', nameProvider: '', state: '', actions:null},
  {position: 3, nameService: 'RunescapeThings', description: 'Grupo creado para los amantes del Runescape, osea literalmente nadie.', TypeService: 'Li', nameProvider: '', state: '', actions:null},
  {position: 4, nameService: 'Eventually', description: 'El primer grupo de todos, el grupo mas capo literalmente.', TypeService: 'Be', nameProvider: '', state: '', actions:null},
  {position: 5, nameService: 'prueba', description: 'prueba', TypeService: 'B', nameProvider: '', state: '', actions:null},
  {position: 6, nameService: 'prueba', description: 'prueba', TypeService: 'C', nameProvider: '', state: '', actions:null},
];

@Component({
  selector: 'app-table-services',
  templateUrl: './table-services.component.html',
  styleUrls: ['./table-services.component.scss']
})
export class TableServicesComponent implements OnInit {

  displayedColumnsService: string[] = ['position', 'nameService', 'description', 'TypeService', 'nameProvider', 'state', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATASERVICE); 

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
