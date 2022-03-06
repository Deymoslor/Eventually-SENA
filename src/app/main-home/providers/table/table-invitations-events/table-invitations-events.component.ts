import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  organizador: string;
  position: number;
  nameGroup: string;
  nameEvento: string;
  date: string;
  actions: null;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, organizador: 'Dylan M R', nameGroup: 'Las mejores ', nameEvento: 'H', date: '03/02/2022', actions:null},
  {position: 2, organizador: 'Carlos Santana', nameGroup: 'GrupoXD', nameEvento: 'He', date: '03/02/2022', actions:null},
  {position: 3, organizador: 'sebas Navia', nameGroup: 'Grupo creado', nameEvento: 'Li', date: '03/02/2022', actions:null},  
  {position: 4, organizador: 'Carlos Rios', nameGroup: 'El primer grupo', nameEvento: 'Be', date: '03/02/2022', actions:null},
  
];

@Component({
  selector: 'app-table-invitations-events',
  templateUrl: './table-invitations-events.component.html',
  styleUrls: ['./table-invitations-events.component.scss']
})
export class TableInvitationsEventsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'organizador', 'nameGroup', 'nameEvento', 'date', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA); 

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
