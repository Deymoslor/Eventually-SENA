import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  nameLikes: string;
  typeLikes: string;
  state: string;
  actions: null;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nameLikes: 'Deportes', typeLikes: 'H', state: '', actions:null},
  {position: 2, nameLikes: 'Danza', typeLikes: 'a', state: '', actions:null},
  {position: 3, nameLikes: 'Familiares', typeLikes: 'd', state: '', actions:null},
  {position: 4, nameLikes: 'Privados', typeLikes: 'H', state: '', actions:null},
  {position: 5, nameLikes: 'Furbol', typeLikes: 'H', state: '', actions:null},
  {position: 6, nameLikes: 'Danza', typeLikes: 'd', state: '', actions:null},
  {position: 7, nameLikes: 'Furbol', typeLikes: 'H', state: '', actions:null},
  {position: 8, nameLikes: 'Danza', typeLikes: 'H', state: '', actions:null},
  
];

@Component({
  selector: 'app-crud-likes',
  templateUrl: './crud-likes.component.html',
  styleUrls: ['./crud-likes.component.scss']
})
export class CrudLikesComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nameLikes', 'typeLikes', 'state', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA); 

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
