import { Component, OnInit } from '@angular/core';
import { EventI } from 'src/app/models/event.interface';
import { ApiService } from 'src/app/services/api/api.service';

import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-in',
  templateUrl: './event-in.component.html',
  styleUrls: ['./event-in.component.scss']
})
export class EventInComponent implements OnInit {

  id!: number;

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

  constructor(private api:ApiService) { }

  idGroup:number = 1
  

  ngOnInit(): void {
    this.api.getSigleEventGroup(this.idGroup).subscribe((data: any) =>{
      console.log(data);
      this.dataEvent =data[0];
      if(this.dataEvent == null){
        
        console.log("hola")
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

  editEvent(id: number){
    this.id = id;
  }

}
