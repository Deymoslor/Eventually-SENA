import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GroupsServiceService } from './service/groups-service.service';
import { Router } from '@angular/router';
import { ListGroups } from './listGroups.interface';

// export interface PeriodicElement {
//   position: number;
//   NameGroups: string;
//   DescriptionGroups: string;
//   Privacy: string;
//   TotalUsers: number;
//   StateGroup: string;
//   actions: null;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, NameGroups: 'Danza', DescriptionGroups: 'Hola a todos', Privacy: '', TotalUsers: 24, StateGroup: '', actions:null},
//   {position: 2, NameGroups: 'Musica Electronica', DescriptionGroups: 'Hola a todos', Privacy: '', TotalUsers: 54, StateGroup: '', actions:null},
//   {position: 3, NameGroups: 'Reggeton', DescriptionGroups: 'Hola a todos', Privacy: '', TotalUsers: 12, StateGroup: '', actions:null},
//   {position: 4, NameGroups: 'Peliculas', DescriptionGroups: 'Hola a todos', Privacy: '', TotalUsers: 19, StateGroup: '', actions:null},
//   {position: 5, NameGroups: 'Deportes', DescriptionGroups: 'Hola a todos', Privacy: '', TotalUsers: 29, StateGroup: '', actions:null},
//   {position: 6, NameGroups: 'Religión', DescriptionGroups: 'Hola a todos', Privacy: '', TotalUsers: 56, StateGroup: '', actions:null},
//   {position: 7, NameGroups: 'Viajes', DescriptionGroups: 'Hola a todos', Privacy: '', TotalUsers: 61, StateGroup: '', actions:null},

// ];

@Component({
  selector: 'app-crud-groups',
  templateUrl: './crud-groups.component.html',
  styleUrls: ['./crud-groups.component.scss']
})
export class CrudGroupsComponent implements OnInit {

  id!: number;

  groups!:ListGroups[];

  // displayedColumns: string[] = ['position', 'NameGroups', 'DescriptionGroups', 'Privacy', 'TotalUsers','StateGroup', 'actions'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatPaginator, { static: true })
  // paginator!: MatPaginator;
  constructor( private GroupsServiceService:GroupsServiceService, private router:Router) { }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;

    this.GroupsServiceService.getAllGroups(1).subscribe(data=>{
      console.log(data);

      this.groups = data;
    })
  }

  editarGroup(id:number){
    this.id = id;
    // console.log(id)
  }

}
