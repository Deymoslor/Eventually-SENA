import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

//Interfaz para definir los datos de la table.
export interface PeriodicElement {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
  state: string;
  actions: null;
}

//Toda la información que tendrá la tabla
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, firstName: 'Jordan', lastName: 'Flórez', email: 'jordan@gmail.com', state: '', actions:null},
  {position: 2, firstName: 'Dylan', lastName: 'Murillo', email: 'Dylan@gmail.com', state: '', actions:null},
  {position: 3, firstName: 'Oscar', lastName: 'Rolón', email: 'Oscar@gmail.com', state: '', actions:null},
  {position: 4, firstName: 'Santiago', lastName: 'Usuga', email: 'Santiago@gmail.com', state: '', actions:null},
  {position: 5, firstName: 'Juan', lastName: 'Zapata', email: 'Juan@gmail.com', state: '', actions:null},
  {position: 6, firstName: 'Miguel', lastName: 'Soto', email: 'Miguel@gmail.com', state: '', actions:null},
];

@Component({
  selector: 'app-crud-suppliers',
  templateUrl: './crud-suppliers.component.html',
  styleUrls: ['./crud-suppliers.component.scss']
})
export class CrudSuppliersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'email', 'state', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
