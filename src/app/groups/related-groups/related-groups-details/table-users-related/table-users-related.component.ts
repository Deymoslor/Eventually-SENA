import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nameUser: string;
  position: number;
  rol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nameUser: 'Tomas', rol: 'Organizador'},
  {position: 2, nameUser: 'Camila', rol: 'Participante'},
  {position: 3, nameUser: 'Camilo', rol: 'Participante'},
  {position: 4, nameUser: 'Isabela', rol: 'Participante'},
  {position: 5, nameUser: 'Dolores', rol: 'Participante'},
  {position: 6, nameUser: 'Daniela', rol: 'Participante'},
  {position: 7, nameUser: 'Maria Teresa', rol: 'Participante'},
  {position: 8, nameUser: 'Christian', rol: 'Participante'},
  {position: 9, nameUser: 'Christis', rol: 'Participante'},
  {position: 10, nameUser: 'Dylan :V', rol: 'Participante'},


];

@Component({
  selector: 'app-table-users-related',
  templateUrl: './table-users-related.component.html',
  styleUrls: ['./table-users-related.component.scss']
})
export class TableUsersRelatedComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nameUser', 'Rol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
