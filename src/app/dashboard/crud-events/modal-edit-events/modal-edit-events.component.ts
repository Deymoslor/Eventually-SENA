import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { EventI } from '../../../models/event.interface'; 
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-edit-events',
  templateUrl: './modal-edit-events.component.html',
  styleUrls: ['./modal-edit-events.component.scss']
})
export class ModalEditEventsComponent implements OnInit {

  @Input() childMessage!: number;

  constructor(private api: ApiService) { 
  }

  dataEvent!: EventI;
  editForm = new FormGroup({
    idEvento: new FormControl(''),
    nombreEvento: new FormControl(''),
    descripcionEvento: new FormControl(''),
    fechaEvento: new FormControl(''),
    tipoEvento: new FormControl(''),
    participantesTotales: new FormControl(''),
    Grupos_idGrupos: new FormControl(''),
    estadoEvento: new FormControl('')
  })
  idEvent!:number;


  ngOnChanges(): void{
    if(this.childMessage > 0){
      this.idEvent = this.childMessage;
      this.api.getSingleEvent(this.idEvent).subscribe((data: any) =>{
       this.dataEvent =data[0];
        this.editForm.setValue({
          'idEvento': this.dataEvent.idEvento,
          'nombreEvento': this.dataEvent.nombreEvento,
          'descripcionEvento': this.dataEvent.descripcionEvento,
          'fechaEvento': this.dataEvent.fechaEvento,
          'tipoEvento': this.dataEvent.tipoEvento,
          'participantesTotales': this.dataEvent.participantesTotales,
          'Grupos_idGrupos': this.dataEvent.Grupos_idGrupos,
          'estadoEvento': this.dataEvent.estadoEvento
        })
        console.log(this.editForm.get('idEvento')?.value);
      });
    };
  }

  ngOnInit(): void {
    console.log(this.childMessage);
  }

  postEditForm(form: EventI){
    console.log(form);
    this.api.putEvent(form).subscribe(data=>{
      console.log(data);
    });
    
  }

  refresh(): void { window.location.reload(); }

  switchStateEvent(num: number){
    if(num != 1){
      console.log("hola soy el num " + num);
      this.editForm.setValue({
        'idEvento': this.dataEvent.idEvento,
          'nombreEvento': this.dataEvent.nombreEvento,
          'descripcionEvento': this.dataEvent.descripcionEvento,
          'fechaEvento': this.dataEvent.fechaEvento,
          'tipoEvento': this.dataEvent.tipoEvento,
          'participantesTotales': this.dataEvent.participantesTotales,
          'Grupos_idGrupos': this.dataEvent.Grupos_idGrupos,
          'estadoEvento': 1
      })
    }else if (num == 1) {
      console.log("hola soy el num " + num);
      this.editForm.setValue({
        'idEvento': this.dataEvent.idEvento,
          'nombreEvento': this.dataEvent.nombreEvento,
          'descripcionEvento': this.dataEvent.descripcionEvento,
          'fechaEvento': this.dataEvent.fechaEvento,
          'tipoEvento': this.dataEvent.tipoEvento,
          'participantesTotales': this.dataEvent.participantesTotales,
          'Grupos_idGrupos': this.dataEvent.Grupos_idGrupos,
          'estadoEvento': 0
      })
    } 
  }

}
