import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ListaRequestEventsI } from './ListaRequestEventsI.interface';
import { RequestEventsI } from './requestsEventsI.interface';
import { RequestEventsService } from './request-events.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-table-request-event',
  templateUrl: './table-request-event.component.html',
  styleUrls: ['./table-request-event.component.scss']
})
export class TableRequestEventComponent implements OnInit {

  //Propiedad que nos sirve para actualizar el estado.
  datosPeticion!:RequestEventsI;

  requests!:ListaRequestEventsI[];
  closeResult!: string;
  idEvent!: string;

  constructor(
    //Inyectamos nuestro servicio.
    private RequestEventsService:RequestEventsService,

    private modalService: NgbModal,
    //Inyectamos el router.
    private router:Router,

    private alertas:AlertasService,
  ) { }

  ngOnInit(): void {

    //Obtenemos todos los pacientes.
    this.RequestEventsService.getAllRequests(1).subscribe(data=>{
      //recibimos por consola los datso que nos esté trayendo.
      // console.log(data);

      //Llamamos a la variable que creamos arriba para asignarle los datos que hay en la variable data.
      this.requests = data;
      console.log(this.requests)
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
        let respuesta:ResponseI = data;
        //Verificamos si la respuesta es exitosa.
        if(respuesta.status == 'ok'){
          this.alertas.showSuccess('Eventos aceptado/habilitado exitosamente','Acción exitosa');
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
        let respuesta:ResponseI = data;
        //Verificamos si la respuesta es exitosa.
        if(respuesta.status == 'ok'){
          this.alertas.showSuccess('Eventos rechazado/inhabilitado exitosamente','Acción exitosa');
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

  getIdEvent(idEvent : string):void {
    this.idEvent = idEvent;
    // console.log(this.idGroup);
  }

  modalOpen(content:any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
