import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { EventI } from '../../../models/event.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-create-event',
  templateUrl: './modal-create-event.component.html',
  styleUrls: ['./modal-create-event.component.scss']
})


export class ModalCreateEventComponent implements OnInit {



  createEventForm = new FormGroup({
    idEvento: new FormControl(''),
    nombreEvento: new FormControl(''),
    descripcionEvento: new FormControl(''),
    estadoEvento: new FormControl(''),
    fechaEvento: new FormControl(''),
    tipoEvento: new FormControl(''),
    participantesTotales: new FormControl(''),
    check: new FormControl(''),
    Grupos_idGrupos: new FormControl(''),
  });


  constructor( private api:ApiService, private router:Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createEventForm = this.fb.group({
      nombreEvento: ['', [Validators.required, Validators.minLength(2)]],
      tipoEvento: ['', Validators.required],
      descripcionEvento: ['', [Validators.required, Validators.minLength(5)]],
      fechaEvento: ['', Validators.required],
      participantesTotales: ['2', Validators.required],
      check: ['', Validators.required],
      // cellPhone: this.getPhoneFromGroup(),
      // homePhone: this.getPhoneFromGroup(),
      // email: new FormControl('', [Validators.email]),
    });
  }

  postForm(form:EventI){
    console.log(form);
    this.api.postEvent(form).subscribe( data => {
      console.log(data);
    })
    this.createEventForm.reset();
  }
  guardar(){
    console.log("si");
  }

  clearForm(){
    this.createEventForm.reset();
  }

}
