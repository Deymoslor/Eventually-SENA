import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { ServiceEventI } from '../../../models/serviceEvent.interface';
import { ApiService } from '../../../services/api.service';
import { AlertasService } from 'src/app/core/service/alertas.service';


@Component({
  selector: 'app-table-invitations-events',
  templateUrl: './table-invitations-events.component.html',
  styleUrls: ['./table-invitations-events.component.scss']
})
export class TableInvitationsEventsComponent implements OnInit {

  @Input() childMessage!: number;
  
  invitations: boolean = false;
  accepted: boolean = false;
  dataServiceEventProv!: ServiceEventI[];

  constructor(private api: ApiService, private alertas: AlertasService) { }

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
    console.log("id proveedor: " + this.childMessage);
    this.api.getAllServiceEventProv(this.childMessage).subscribe(data =>{
      if(data){
        this.invitations = true;
        console.log(data);
        data.forEach(key => {
          console.log(key);
          if (key.estadoInvitacion == 1) {
            this.accepted = true;
          }
        });
        this.dataServiceEventProv = data;
        }
      else if(!data){
        this.invitations = false;
      }
    })
  }

  changeStateServiceProvA(form:ServiceEventI){
    console.log(form);
      form.estadoInvitacion = 1;
    this.api.putServiceEventProv(form).subscribe(data=>{
      console.log(data);
      let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Edicion exitosa','Registro exitoso');
            setTimeout(()=>{
              this.refresh();
            },2000);
          }else{
            this.alertas.showSuccess('Edicion exitosa','Registro exitoso');
            setTimeout(()=>{
              this.refresh();
            },2000);
          }
    });
    // this.refresh();
}

  changeStateServiceProvD(form:ServiceEventI){
    console.log(form);
      form.estadoInvitacion = 2;
    this.api.putServiceEventProv(form).subscribe(data=>{
      console.log(data);
      let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Edicion exitosa','Registro exitoso');
            setTimeout(()=>{
              this.refresh();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(()=>{
              // this.refresh();
            },2000);
          }
    });
    // this.refresh();
  }

refresh(){
  window.location.reload();
}

}
