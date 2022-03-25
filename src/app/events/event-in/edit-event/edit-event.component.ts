import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';

import { EventI } from 'src/app/models/event.interface';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  constructor(private activeRouter: ActivatedRoute, private router:Router, private api:ApiService,  private fb: FormBuilder) { }

  dataEvent!:EventI;
  idEvent!:number;

  editFormIn = new FormGroup({
    idEvento: new FormControl(''),
    nombreEvento: new FormControl(''),
    descripcionEvento: new FormControl(''),
    fechaEvento: new FormControl(''),
    tipoEvento: new FormControl(''),
    ParticipantesTotales: new FormControl(''),
    estadoEvento: new FormControl('')
  })

  ngOnInit(): void {
    
    let eventId = this.activeRouter.snapshot.paramMap.get('idE');
    this.api.getSingleEvent(eventId).subscribe((data: any) =>{
      this.dataEvent =data[0];
      this.editFormIn.setValue({
        'idEvento': this.dataEvent.idEvento,
        'nombreEvento': this.dataEvent.nombreEvento,
        'descripcionEvento': this.dataEvent.descripcionEvento,
        'fechaEvento': this.dataEvent.fechaEvento,
        'tipoEvento': this.dataEvent.tipoEvento,
        'ParticipantesTotales': this.dataEvent.ParticipantesTotales,
        'estadoEvento': this.dataEvent.estadoEvento
      })
    })
  }

  switchStateEvent(num: number){
    if(num != 1){
      this.editFormIn.setValue({
        'idEvento': this.dataEvent.idEvento,
          'nombreEvento': this.dataEvent.nombreEvento,
          'descripcionEvento': this.dataEvent.descripcionEvento,
          'fechaEvento': this.dataEvent.fechaEvento,
          'tipoEvento': this.dataEvent.tipoEvento,
          'ParticipantesTotales': this.dataEvent.ParticipantesTotales,
          'estadoEvento': 1
      })
    }else if (num == 1) {
      this.editFormIn.setValue({
          'idEvento': this.dataEvent.idEvento,
          'nombreEvento': this.dataEvent.nombreEvento,
          'descripcionEvento': this.dataEvent.descripcionEvento,
          'fechaEvento': this.dataEvent.fechaEvento,
          'tipoEvento': this.dataEvent.tipoEvento,
          'ParticipantesTotales': this.dataEvent.ParticipantesTotales,
          'estadoEvento': 0
      })
    } 
  }

  goback(idE:number ){
    this.router.navigate(['events/event-in', idE]);
  }

  postEditForm(form: EventI){
    console.log(form);
    this.api.putEvent(form).subscribe(data=>{
      console.log(data);
    });
    // this.idEvent = this.editForm.get('idEvent')?.value;
    this.goback(this.editFormIn.get('idEvento')?.value);
  }

}
