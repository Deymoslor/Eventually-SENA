import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';

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

  id!:number;
  likes?:LikesI[];

  constructor(
    private api:ApiService
  ) { }

  ngOnInit(): void {
    
    this.api.getAllLikes(1).subscribe(data => {this.likes=data})


  }
  editLikes(id:number){
    this.id=id;
  }

  // cambioEstado(estado:number,id:number){

  //   if (estado == 1) {

  //     //Llamamos al servicio para solicitar una sola persona y poder editar el estado sin cambiar el resto de datos de la cuenta.
  //     this.userService.getSinglePerson(id).subscribe((data:any) =>{

  //     //asignamos el valor que venga desde la API a una variable para poder recorrerla.
  //     this.datosPersona = data[0];

  //     this.datosPersona.Estado="Inactivo";

  //     let token = localStorage.getItem('token');

  //     this.datosPersona.token = token;

  //     this.userService.putPerson(this.datosPersona).subscribe((data:any) =>{

  //       console.log("Entrando aquí");
        
  //       window.location.reload();

  //     });


  //   });

  //   }else{

  //       //Llamamos al servicio para solicitar una sola persona y poder editar el estado sin cambiar el resto de datos de la cuenta.
  //       this.userService.getSinglePerson(id).subscribe((data:any) =>{

  //       //asignamos el valor que venga desde la API a una variable para poder recorrerla.
  //       this.datosPersona = data[0];

  //       this.datosPersona.Estado="Activo";

  //       let token = localStorage.getItem('token');

  //       this.datosPersona.token = token;

  //       this.userService.putPerson(this.datosPersona).subscribe((data:any) =>{

  //         window.location.reload();

  //       });

  //     });

  //   }

}
