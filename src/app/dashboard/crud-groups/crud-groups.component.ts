import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GroupsServiceService } from './service/groups-service.service';
import { Router } from '@angular/router';
import { ListGroups } from './listGroups.interface';
import { Group } from './modal-edit-groups/group.interface';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';

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

  datosGrupo!:Group;

  public previsualizacion!: string;

  // displayedColumns: string[] = ['position', 'NameGroups', 'DescriptionGroups', 'Privacy', 'TotalUsers','StateGroup', 'actions'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatPaginator, { static: true })
  // paginator!: MatPaginator;
  constructor( private GroupsServiceService:GroupsServiceService, private router:Router, private alertas:AlertasService) { }


  closeResult = '';

  filterGrupo = '';

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [10, 20, 30, 40, 50];
  lengthTable!: number

  totalRecords!: number;

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;

    this.GroupsServiceService.getAllGroups(1).subscribe(data=>{
      console.log(data);
      console.log(this.tableSizes)

      this.groups = data;
    })
  }

  editarGroup(id:number){
    this.id = id;
    // console.log(id)
  }

  switchStateGroup(num: number, id:number){
    if (num != 1) {
      console.log("hola soy el num " + num);
      this.GroupsServiceService.getSingleGroup(id).subscribe((data:any) => {
        this.datosGrupo = data[0];
        this.datosGrupo.EstadosGrupo_idEstadosGrupo1 = 1;
        this.datosGrupo.imagen == null;
        this.datosGrupo.imagen = this.previsualizacion;
        console.log(this.datosGrupo);
        this.GroupsServiceService.putGroup(this.datosGrupo).subscribe((data:any) =>{
          let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Estado cambiado correctamente','Actulización exitosa');
            setTimeout(() =>{
              window.location.reload();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(() =>{
              window.location.reload();
            },2000);
          }
        });
      });
    } else if (num == 1) {
      console.log("hola soy el num " + num);
      this.GroupsServiceService.getSingleGroup(id).subscribe((data:any) => {
        this.datosGrupo = data[0];
        this.datosGrupo.EstadosGrupo_idEstadosGrupo1 = 2;
        this.datosGrupo.imagen == null;
        this.datosGrupo.imagen = this.previsualizacion;
        console.log(this.datosGrupo);
        this.GroupsServiceService.putGroup(this.datosGrupo).subscribe((data:any) =>{
          let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Estado cambiado correctamente','Actulización exitosa');
            setTimeout(() =>{
              window.location.reload();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(() =>{
              window.location.reload();
            },2000);
          }
        });
      });
    }
  }

  switchPublicGroup(num: number, id:number){
    if (num != 1) {
      console.log("hola soy el num " + num);
      this.GroupsServiceService.getSingleGroup(id).subscribe((data:any) => {
        this.datosGrupo = data[0];
        this.datosGrupo.privacidadGrupo = 1;
        this.datosGrupo.imagen = this.previsualizacion;
        console.log(this.datosGrupo);
        this.GroupsServiceService.putGroup(this.datosGrupo).subscribe((data:any) =>{
          let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('privacidad cambiada correctamente','Actulización exitosa');
            setTimeout(() =>{
              window.location.reload();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(() =>{
              window.location.reload();
            },2000);
          }
        });
      });
    } else if (num == 1) {
      console.log("hola soy el num " + num);
      this.GroupsServiceService.getSingleGroup(id).subscribe((data:any) => {
        this.datosGrupo = data[0];
        this.datosGrupo.privacidadGrupo = 2;
        this.datosGrupo.imagen = this.previsualizacion;
        console.log(this.datosGrupo);
        this.GroupsServiceService.putGroup(this.datosGrupo).subscribe((data:any) =>{
          let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('privacidad cambiada correctamente','Actulización exitosa');
            setTimeout(() =>{
              window.location.reload();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(() =>{
              window.location.reload();
            },2000);
          }
        });
      });
    }
  }

  refresh(): void { window.location.reload(); }

}
