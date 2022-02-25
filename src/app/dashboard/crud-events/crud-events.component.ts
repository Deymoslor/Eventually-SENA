import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  nameGroup: string;
  position: number;
  description: string;
  typeGroup: string;
  cantPeople: number;
  state: string;
  actions: null;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nameGroup: 'Furbol', description: 'Grupo de futbol especializado en el balon.', typeGroup: 'H', cantPeople: 1, state: '', actions:null},
  {position: 2, nameGroup: 'Furbol2', description: 'Grupo de futbol especializado en el balon pero mas que el otro XD', typeGroup: 'He', cantPeople: 1, state: '', actions:null},
  {position: 3, nameGroup: 'RunescapeThings', description: 'Grupo creado para los amantes del Runescape, osea literalmente nadie.', typeGroup: 'Li', cantPeople: 1, state: '', actions:null},
  {position: 4, nameGroup: 'Eventually', description: 'El primer grupo de todos, el grupo mas capo literalmente.', typeGroup: 'Be', cantPeople: 1, state: '', actions:null},
  {position: 5, nameGroup: 'prueba', description: 'prueba', typeGroup: 'B', cantPeople: 1, state: '', actions:null},
  {position: 6, nameGroup: 'prueba', description: 'prueba', typeGroup: 'C', cantPeople: 1, state: '', actions:null},
  {position: 6, nameGroup: 'prueba', description: 'prueba', typeGroup: 'C', cantPeople: 1, state: '', actions:null},
  {position: 6, nameGroup: 'prueba', description: 'prueba', typeGroup: 'C', cantPeople: 1, state: '', actions:null},
  {position: 6, nameGroup: 'prueba', description: 'prueba', typeGroup: 'C', cantPeople: 1, state: '', actions:null},
  {position: 6, nameGroup: 'prueba', description: 'prueba', typeGroup: 'C', cantPeople: 1, state: '', actions:null},
  {position: 6, nameGroup: 'prueba', description: 'prueba', typeGroup: 'C', cantPeople: 1, state: '', actions:null},
  {position: 6, nameGroup: 'prueba', description: 'prueba', typeGroup: 'C', cantPeople: 1, state: '', actions:null},
  
  
];
@Component({
  selector: 'app-crud-events',
  templateUrl: './crud-events.component.html',
  styleUrls: ['./crud-events.component.scss']
})
export class CrudEventsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nameGroup', 'description', 'typeGroup', 'cantPeople', 'state', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA); 

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  

}
