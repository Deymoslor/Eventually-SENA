import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

//Interfaz para definir los datos de la table.
export interface PeriodicElement {
  position: number;
  firstName: string;
  lastName: string;
  document: number;
  bornDate: string;
  email: string;
  state: string;
  actions: null;
}

//Toda la información que tendrá la tabla
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, firstName: 'Jordan', lastName: 'Flórez', document: 1001236570, bornDate: '14/04/2003', email: 'jordan@gmail.com', state: '', actions:null},
  {position: 2, firstName: 'Dylan', lastName: 'Murillo', document: 1554894878, bornDate: '09/04/2003', email: 'Dylan@gmail.com', state: '', actions:null},
  {position: 3, firstName: 'Oscar', lastName: 'Rolón', document: 5668756427, bornDate: '05/08/2003', email: 'Oscar@gmail.com', state: '', actions:null},
  {position: 4, firstName: 'Santiago', lastName: 'Usuga', document: 6657899548, bornDate: '09/03/2003', email: 'Santiago@gmail.com', state: '', actions:null},
  {position: 5, firstName: 'Juan', lastName: 'Zapata', document: 4657984125, bornDate: '25/11/2003', email: 'Juan@gmail.com', state: '', actions:null},
  {position: 6, firstName: 'Miguel', lastName: 'Soto', document: 7945249861, bornDate: '15/10/2003', email: 'Miguel@gmail.com', state: '', actions:null},
];

@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.scss']
})
export class CrudUsersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'document', 'bornDate', 'email', 'state', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
