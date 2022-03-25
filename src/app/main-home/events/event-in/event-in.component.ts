import { Component, OnInit } from '@angular/core';
import { EventI } from 'src/app/models/event.interface';
import { ApiService } from 'src/app/services/api/api.service';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-in',
  templateUrl: './event-in.component.html',
  styleUrls: ['./event-in.component.scss']
})
export class EventInComponent implements OnInit {

  dataEvent!: EventI;
  eventGroupForm = new FormGroup({
    idEvento: new FormControl(''),
    nombreEvento: new FormControl(''),
    descripcionEvento: new FormControl(''),
    fechaEvento: new FormControl(''),
    tipoEvento: new FormControl(''),
    ParticipantesTotales: new FormControl(''),
    Grupos_idGrupos: new FormControl(''),
    estadoEvento: new FormControl('')
  })

  constructor(private api:ApiService, private router:Router, private modalService: NgbModal) { }

  idGroup:number = 1
  closeResult = '';
  

  ngOnInit(): void {
    this.api.getSigleEventGroup(this.idGroup).subscribe((data: any) =>{
      console.log(data);
      this.dataEvent =data[0];
      if(this.dataEvent == null){
        
        this.eventGroupForm.setValue({
          'idEvento': '1',
          'nombreEvento': '',
          'descripcionEvento': '',
          'fechaEvento': '',
          'tipoEvento': '',
          'ParticipantesTotales': '',
          'Grupos_idGrupos': '',
          'estadoEvento': '3',
        })
      }else{
        
       this.eventGroupForm.setValue({
         'idEvento': this.dataEvent.idEvento,
         'nombreEvento': this.dataEvent.nombreEvento,
         'descripcionEvento': this.dataEvent.descripcionEvento,
         'fechaEvento': this.dataEvent.fechaEvento,
         'tipoEvento': this.dataEvent.tipoEvento,
         'ParticipantesTotales': this.dataEvent.ParticipantesTotales,
         'Grupos_idGrupos': this.dataEvent.Grupos_idGrupos,
         'estadoEvento': this.dataEvent.estadoEvento
       })
      }
     });
  }

  editEvent(idE:number ){
    this.router.navigate(['events/edit', idE]);
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
