import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailServiceEventI } from 'src/app/main-home/providers/models/detail-service-event.interface';
import { InvitationProvSerI } from 'src/app/main-home/providers/models/invitation-prov-ser.interface';
import { ApiService } from 'src/app/main-home/providers/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { EventI } from 'src/app/models/event.interface';
import { ServiceEventI } from 'src/app/main-home/providers/models/serviceEvent.interface';
import { TypeServicesI } from 'src/app/dashboard/crud-services/models/typeServices.interface';
import { ApiResultsServicesService } from '../../services/api.results-services.service';
import { ResultServiceI } from '../../../../models/result-service.interface';


@Component({
  selector: 'app-event-provider',
  templateUrl: './event-provider.component.html',
  styleUrls: ['./event-provider.component.scss']
})
export class EventProviderComponent implements OnInit {

@Input() form!: EventI;
@Input() idEvento!: number;
@Input() terminate!: boolean;

  createInv = new FormGroup({
    Evento_idEvento: new FormControl(''),
    Servicio_idServicios: new FormControl(''),
  });

  stateAccept:number = 0;
  idServiceAceppted:number = 1;

  nombreProveedor!: string;
  nombreServicio!: string;

  dataProviderService!: InvitationProvSerI[];
  dataServiceState!: ServiceEventI[];
  dataTypeService!: TypeServicesI[]
  dataResultService!: ResultServiceI[];

  
  number!:number;
  constructor(private api:ApiService, private modalService: NgbModal, private route:ActivatedRoute, private apiRS: ApiResultsServicesService) { }
  closeResult = '';

  ngOnInit(): void {
    let state: number | null;
    console.log("racineta rango: " + this.terminate);
    this.api.getAllProvServicesInv(1).subscribe(datas =>{
      console.log(datas);
      this.dataProviderService = datas;
      this.dataProviderService.forEach(key => {
        console.log(key.idServicios + "si");
        let total = 0
        this.apiRS.getResultsServices(key.idServicios).subscribe(data =>{
          if(data){
              this.dataResultService = data;

              this.dataResultService.forEach(element2 => {
                console.log("MUCHO CP: " + element2.calificacion);
                total = total + element2.calificacion;
              });
              console.log("TOTAL: " + total);
          }
        })
        
        console.log(this.idEvento)
        this.api.getStateInvitationService(key.idServicios.toString(), this.idEvento.toString()).subscribe(data =>{
          console.log(data);
          this.dataServiceState = data
          this.dataServiceState.forEach(element => {
            if (element == null){
              key.estadoInvitacion = element;
            }else{
              key.estadoInvitacion = element.estadoInvitacion;
              this.idServiceAceppted = key.Servicio_idServicios;
              console.log(key.estadoInvitacion);
            }
            
          });
          if(key.estadoInvitacion == 1){
            this.stateAccept = 1;
            this.nombreProveedor = key.nombreProveedor;
            this.nombreServicio = key.nombreServicio;
          }
        })
        this.api.getAllTypeServices(1).subscribe(data =>{
          this.dataTypeService = data;
          data.forEach(key2 => {
            if(key2.idtipoServicio == key.TipoServicio_idtipoServicio){
              key.tipoServicio = key2.tipoServicio;
            }
          });
        })
      });
      
    })
    

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

  modalOpen2(content2:any){
    this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason2(reason)}`;
    });
  }

  private getDismissReason2(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  postInvitation(forms: InvitationProvSerI){
    // let eventId = Number(this.route.snapshot.paramMap.get('id'));
    forms.Evento_idEvento = this.idEvento;
    forms.Servicio_idServicios = forms.idServicios;
    console.log(forms);
    this.api.postInvitationService(forms).subscribe(data =>{
      console.log(forms);
    })
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }
}
