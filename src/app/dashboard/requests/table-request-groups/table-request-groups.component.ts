import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RequestGroupsI } from './requestsGroupsI.interface';
import { ListaRequestGroupsI } from './ListaRequestGroupsI.interface';
import { Router } from '@angular/router';
import { RequestGroupsService } from './request-groups.service';

@Component({
  selector: 'app-table-request-groups',
  templateUrl: './table-request-groups.component.html',
  styleUrls: ['./table-request-groups.component.scss']
})
export class TableRequestGroupsComponent implements OnInit {

  //Propiedad que nos sirve para actualizar el estado.
  datosPeticion!:RequestGroupsI;

  requests!:ListaRequestGroupsI[];

  constructor(
    //Inyectamos nuestro servicio.
    private RequestGroupsService:RequestGroupsService,

    //Inyectamos el router.
    private router:Router
  ) { }

  ngOnInit(): void {

    //Obtenemos todos los pacientes.
    this.RequestGroupsService.getAllRequests(1).subscribe(data=>{
      //recibimos por consola los datso que nos esté trayendo.
      // console.log(data);

      //Llamamos a la variable que creamos arriba para asignarle los datos que hay en la variable data.
      this.requests = data;

    });

  }

  aceptarPeticion(id:number){
    //Llamamos al servicio para solicitar una sola persona y poder editar el estado sin cambiar el resto de datos de la cuenta.
    this.RequestGroupsService.getSingleRequest(id).subscribe((data:any) =>{
      //asignamos el valor que venga desde la API a una variable para poder recorrerla.
      this.datosPeticion = data[0];
      this.datosPeticion.estadoPeticion="2";
      let token = localStorage.getItem('token');
      this.datosPeticion.token = token;
      console.log(this.datosPeticion);

      this.RequestGroupsService.putRequest(this.datosPeticion).subscribe((data:any) =>{
        // console.log("Entrando aquí");
        window.location.reload();
      });
    });
  }

  rechazarPeticion(id:number){
    //Llamamos al servicio para solicitar una sola persona y poder editar el estado sin cambiar el resto de datos de la cuenta.
    this.RequestGroupsService.getSingleRequest(id).subscribe((data:any) =>{
      //asignamos el valor que venga desde la API a una variable para poder recorrerla.
      this.datosPeticion = data[0];
      this.datosPeticion.estadoPeticion="3";
      let token = localStorage.getItem('token');
      this.datosPeticion.token = token;
      this.RequestGroupsService.putRequest(this.datosPeticion).subscribe((data:any) =>{
        // console.log("Entrando aquí");
        window.location.reload();
      });
    });
  }

}
