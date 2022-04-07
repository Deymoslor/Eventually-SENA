import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ListaRequestEventsI } from './ListaRequestEventsI.interface';
import { RequestEventsI } from './requestsEventsI.interface';
import { RequestEventsService } from './request-events.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-request-event',
  templateUrl: './table-request-event.component.html',
  styleUrls: ['./table-request-event.component.scss']
})
export class TableRequestEventComponent implements OnInit {

  //Propiedad que nos sirve para actualizar el estado.
  datosPeticion!:RequestEventsI;

  requests!:ListaRequestEventsI[];

  constructor(
    //Inyectamos nuestro servicio.
    private RequestEventsService:RequestEventsService,

    //Inyectamos el router.
    private router:Router
  ) { }

  ngOnInit(): void {

    //Obtenemos todos los pacientes.
    this.RequestEventsService.getAllRequests(1).subscribe(data=>{
      //recibimos por consola los datso que nos esté trayendo.
      // console.log(data);

      //Llamamos a la variable que creamos arriba para asignarle los datos que hay en la variable data.
      this.requests = data;

    });

  }

  aceptarPeticion(id:number){
    //Llamamos al servicio para solicitar una sola persona y poder editar el estado sin cambiar el resto de datos de la cuenta.
    this.RequestEventsService.getSingleRequest(id).subscribe((data:any) =>{
      //asignamos el valor que venga desde la API a una variable para poder recorrerla.
      this.datosPeticion = data[0];
      this.datosPeticion.estadoPeticion="2";
      let token = localStorage.getItem('token');
      this.datosPeticion.token = token;
      console.log(this.datosPeticion);

      this.RequestEventsService.putRequest(this.datosPeticion).subscribe((data:any) =>{
        // console.log("Entrando aquí");
        window.location.reload();
      });
    });
  }

  rechazarPeticion(id:number){
    //Llamamos al servicio para solicitar una sola persona y poder editar el estado sin cambiar el resto de datos de la cuenta.
    this.RequestEventsService.getSingleRequest(id).subscribe((data:any) =>{
      //asignamos el valor que venga desde la API a una variable para poder recorrerla.
      this.datosPeticion = data[0];
      this.datosPeticion.estadoPeticion="3";
      let token = localStorage.getItem('token');
      this.datosPeticion.token = token;
      this.RequestEventsService.putRequest(this.datosPeticion).subscribe((data:any) =>{
        // console.log("Entrando aquí");
        window.location.reload();
      });
    });
  }

}
