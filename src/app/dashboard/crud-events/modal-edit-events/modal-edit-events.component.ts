import { Component, OnInit, Input } from '@angular/core';

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
    ParticipantesTotales: new FormControl(''),
    Grupos_idGrupos: new FormControl(''),
    estadoEvento: new FormControl('')
  })

  ngOnChanges(): void{
    
    console.log(this.childMessage);
    if(this.childMessage > 0){
      this.api.getSingleEvent(this.childMessage).subscribe((data: any) =>{
       this.dataEvent =data[0];
        this.editForm.setValue({
          'idEvento': this.dataEvent.idEvento,
          'nombreEvento': this.dataEvent.nombreEvento,
          'descripcionEvento': this.dataEvent.descripcionEvento,
          'fechaEvento': this.dataEvent.fechaEvento,
          'tipoEvento': this.dataEvent.tipoEvento,
          'ParticipantesTotales': this.dataEvent.ParticipantesTotales,
          'Grupos_idGrupos': this.dataEvent.Grupos_idGrupos,
          'estadoEvento': this.dataEvent.estadoEvento
        })
      });
    };
  }

  ngOnInit(): void {
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
          'ParticipantesTotales': this.dataEvent.ParticipantesTotales,
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
          'ParticipantesTotales': this.dataEvent.ParticipantesTotales,
          'Grupos_idGrupos': this.dataEvent.Grupos_idGrupos,
          'estadoEvento': 0
      })
    } 
  }

}
