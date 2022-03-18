import { Component, OnInit, Input } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';

import {EventI} from '../../../models/event.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {



  @Input() childMessage!: number;
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
  });

  constructor(private calendar: NgbCalendar, private api:ApiService) { }
  
  ngOnChanges(): void {
    console.log(this.childMessage);
    if(this.childMessage != undefined){
      console.log("si entre");
      this.api.getSingleEvent(this.childMessage).subscribe((data: any) =>{
       this.dataEvent =data[0];
       console.log(data[0]);
        this.editForm.setValue({
          'idEvento': 1,
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
    this.api.putEvent(form).subscribe((data:any)=>{
      console.log(data);
    });

  }

}
