import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nameUser: string;
  position: number;
  rol: string;
  actions: null;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nameUser: 'Elizabeth', rol: 'Organizador', actions:null},
  {position: 2, nameUser: 'Mariana', rol: 'Participante', actions:null},
  {position: 3, nameUser: 'Colonia', rol: 'Participante', actions:null},
  {position: 4, nameUser: 'Sebastian', rol: 'Participante', actions:null},
  {position: 5, nameUser: 'Le Compañere', rol: 'Participante', actions:null},
  {position: 6, nameUser: 'Tortilla', rol: 'Participante', actions:null},
  {position: 7, nameUser: 'Avestruz', rol: 'Participante', actions:null},
  {position: 8, nameUser: 'Alemania', rol: 'Participante', actions:null},
  {position: 9, nameUser: 'Christis', rol: 'Participante', actions:null},
  {position: 10, nameUser: 'Dylan :V', rol: 'Participante', actions:null},


];

@Component({
  selector: 'app-table-users-groups',
  templateUrl: './table-users-groups.component.html',
  styleUrls: ['./table-users-groups.component.scss']
})
export class TableUsersGroupsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nameUser', 'Rol', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}