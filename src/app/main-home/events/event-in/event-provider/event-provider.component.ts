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


@Component({
  selector: 'app-event-provider',
  templateUrl: './event-provider.component.html',
  styleUrls: ['./event-provider.component.scss']
})
export class EventProviderComponent implements OnInit {

  @Input() form!: EventI;
@Input() idEvento!: number;

  createInv = new FormGroup({
    Evento_idEvento: new FormControl(''),
    Servicio_idServicios: new FormControl(''),
  });

  stateAccept:number = 0;

  nombreProveedor!: string;
  nombreServicio!: string;
  dataProviderService!: InvitationProvSerI[];
  dataAccept!: InvitationProvSerI;
  dataInvitationDetail?: DetailServiceEventI;
  
  number!:number;
  constructor(private api:ApiService, private modalService: NgbModal, private route:ActivatedRoute) { }
  closeResult = '';

  ngOnInit(): void {
    console.log(this.form)
    this.api.getAllProvServicesInv(1).subscribe(data =>{
      console.log(data);
      this.dataProviderService = data;
      this.dataProviderService.forEach(key =>{
        if(key.estadoInvitacion == 1){
          this.stateAccept = 1;
          this.nombreProveedor = key.nombreProveedor;
          this.nombreServicio = key.nombreServicio;
        }
      })
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

  postInvitation(form: InvitationProvSerI){
    // let eventId = Number(this.route.snapshot.paramMap.get('id'));
    form.Evento_idEvento = this.idEvento;
    form.Servicio_idServicios = form.idServicios;
    console.log(form);
    this.api.postInvitationService(form).subscribe(data =>{
      console.log(data);
    })

  }

}
