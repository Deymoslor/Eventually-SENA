import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElementService {
  position: number;
  nameGroup: string;  
  description: string;
  typeGroup: string;
  nameOrganizer: string;
  actions: null;
};

const ELEMENT_DATASERVICE: PeriodicElementService[] = [
  {position: 1, nameGroup: 'Futbol de calidad', description: 'ENSEÑANZA DE FUTBOL A NIVEL INCREIBLES', typeGroup: 'Deportes', nameOrganizer: 'Dylan Malumaniatico', actions:null},
  {position: 2, nameGroup: 'Furbol2', description: 'Grupo de futbol especializado en el balon pero mas que el otro XD', typeGroup: 'He', nameOrganizer: '', actions:null},
  {position: 3, nameGroup: 'RunescapeThings', description: 'Grupo creado para los amantes del Runescape, osea literalmente nadie.', typeGroup: 'Li', nameOrganizer: '', actions:null},
  {position: 4, nameGroup: 'Eventually', description: 'El primer grupo de todos, el grupo mas capo literalmente.', typeGroup: 'Be', nameOrganizer: '', actions:null},
  {position: 5, nameGroup: 'prueba', description: 'prueba', typeGroup: 'B', nameOrganizer: '', actions:null},
  {position: 6, nameGroup: 'prueba', description: 'prueba', typeGroup: 'C', nameOrganizer: '', actions:null},
];

@Component({
  selector: 'app-table-request-groups',
  templateUrl: './table-request-groups.component.html',
  styleUrls: ['./table-request-groups.component.scss']
})
export class TableRequestGroupsComponent implements OnInit {

  displayedColumnsService: string[] = ['position', 'nameGroup', 'description', 'typeGroup', 'nameOrganizer', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATASERVICE); 

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
