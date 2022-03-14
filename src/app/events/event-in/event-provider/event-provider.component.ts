import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  nameProvider: string;
  position: number;
  description: string;
  typeService: string;
  points: number;
  actions: null;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nameProvider: 'Dylan M R', description: 'Las mejores hamburguesas a precio infalibles.', typeService: 'H', points: 1, actions:null},
  {position: 2, nameProvider: 'Furbol2', description: 'Grupo de futbol especializado en el balon pero mas que el otro XD', typeService: 'He', points: 1, actions:null},
  {position: 3, nameProvider: 'RunescapeThings', description: 'Grupo creado para los amantes del Runescape, osea literalmente nadie.', typeService: 'Li', points: 1, actions:null},
  {position: 4, nameProvider: 'Eventually', description: 'El primer grupo de todos, el grupo mas capo literalmente.', typeService: 'Be', points: 1, actions:null},

];

@Component({
  selector: 'app-event-provider',
  templateUrl: './event-provider.component.html',
  styleUrls: ['./event-provider.component.scss']
})
export class EventProviderComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nameProvider', 'description', 'typeService', 'points', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
