import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RequestGroupsI } from './requestsGroupsI.interface';
import { ListaRequestGroupsI } from './ListaRequestGroupsI.interface';
import { Router } from '@angular/router';
import { RequestGroupsService } from './request-groups.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-table-request-groups',
  templateUrl: './table-request-groups.component.html',
  styleUrls: ['./table-request-groups.component.scss']
})
export class TableRequestGroupsComponent implements OnInit {

  //Propiedad que nos sirve para actualizar el estado.
  datosPeticion!:RequestGroupsI;

  requests!:ListaRequestGroupsI[];
  idGroup!: string;

  constructor(
    //Inyectamos nuestro servicio.
    private RequestGroupsService:RequestGroupsService,
    private modalService: NgbModal,
    //Inyectamos el router.
    private router:Router,
    private alertas: AlertasService,
  ) { }

  closeResult = '';

  ngOnInit(): void {

    //Obtenemos todos los pacientes.
    this.RequestGroupsService.getAllRequests(1).subscribe(data=>{
      //recibimos por consola los datso que nos esté trayendo.
      // console.log(data);

      //Llamamos a la variable que creamos arriba para asignarle los datos que hay en la variable data.
      this.requests = data;
      console.log('entre');
      console.log(this.requests);
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
        let respuesta:ResponseI = data;
        //Verificamos si la respuesta es exitosa.
        if(respuesta.status == 'ok'){
          this.alertas.showSuccess('Grupo aceptado/habilitado exitosamente','Acción exitosa');
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
    this.RequestGroupsService.getSingleRequest(id).subscribe((data:any) =>{
      //asignamos el valor que venga desde la API a una variable para poder recorrerla.
      this.datosPeticion = data[0];
      this.datosPeticion.estadoPeticion="3";
      let token = localStorage.getItem('token');
      this.datosPeticion.token = token;
      this.RequestGroupsService.putRequest(this.datosPeticion).subscribe((data:any) =>{
        // console.log("Entrando aquí");
        let respuesta:ResponseI = data;
        //Verificamos si la respuesta es exitosa.
        if(respuesta.status == 'ok'){
          this.alertas.showSuccess('Grupo rechazado/inhabilitado exitosamente','Acción exitosa');
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

  getIdGroup(idGroup : string):void {
    this.idGroup = idGroup;
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
