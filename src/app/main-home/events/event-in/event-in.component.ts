import { Component, OnInit, Input } from '@angular/core';
import { EventI } from 'src/app/models/event.interface';
import { ApiService } from 'src/app/services/api/api.service';

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/core/service/auth.service';
import { ParticipantsEventsI } from '../../../models/participants-events.interface';

@Component({
  selector: 'app-event-in',
  templateUrl: './event-in.component.html',
  styleUrls: ['./event-in.component.scss']
})
export class EventInComponent implements OnInit {

  @Input() idGroup;
  stateGroupPerson!:number;
  idEventExist!: number;
  existPerson!: number;
  dateS!: string;
  totalPersonsIn!: number;
  actualDate!: Date;
  dateEvent!: Date;
  dateTerminate!: Date;
  terminate!: boolean;

  dataEvent!: EventI;
  dataPersonJoin!: ParticipantsEventsI;


  eventGroupForm = new FormGroup({
    idEvento: new FormControl(''),
    nombreEvento: new FormControl(''),
    descripcionEvento: new FormControl(''),
    fechaEvento: new FormControl(''),
    tipoEvento: new FormControl(''),
    participantesTotales: new FormControl(''),
    Grupos_idGrupos: new FormControl(''),
    estadoEvento: new FormControl('')
  })

  joinEventForm = new FormGroup({
    personaIngresada: new FormControl(''),
    Evento_IdEvento: new FormControl('')
  })

  constructor(private api:ApiService, private router:Router, private modalService: NgbModal,
     private route: ActivatedRoute, private fb: FormBuilder, private auth: AuthService) { }
  closeResult = '';

  createEventForm = new FormGroup({
    
  });

  ngOnInit(): void {

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    this.actualDate = date;
    

    date = new Date(year + "-" + month + "-" + day + "-");
    console.log("fecha" + date);
    date.setDate( date.getDate() + 2);
    console.log(date);
    month = date.getMonth() + 1;


    this.dateS = date.getFullYear() + "-" + (month.toString().padStart(2,'0')) + "-" + date.getDate();
    console.log("String fehca: " + this.dateS);

    this.idGroup = this.route.snapshot.paramMap.get('id');
    this.api.getStatePersonGroup(this.auth.desencriptar(localStorage.getItem("id")), this.idGroup).subscribe((data) =>{
      // console.log(data[0]);
      this.stateGroupPerson = data[0].estadoPersona_idEstadoPersona;
    })

    this.createEventForm = this.fb.group({
      nombreEvento: ['', [Validators.required, Validators.minLength(2)]],
      tipoEvento: ['', Validators.required],
      descripcionEvento: ['', [Validators.required, Validators.minLength(5)]],
      fechaEvento: ['', Validators.required],
      participantesTotales: ['2', Validators.required],
      check: ['', Validators.requiredTrue],
      // cellPhone: this.getPhoneFromGroup(),
      // homePhone: this.getPhoneFromGroup(),
      // email: new FormControl('', [Validators.email]),
    });

    let idGrupos = this.route.snapshot.paramMap.get('id');
    this.api.getSigleEventGroup(Number(idGrupos)).subscribe((data: any) =>{
      this.dataEvent =data[0];
      
      if(this.dataEvent == null){
        this.eventGroupForm.setValue({
          'idEvento': '1',
          'nombreEvento': '',
          'descripcionEvento': '',
          'fechaEvento': '',
          'tipoEvento': '',
          'participantesTotales': '',
          'Grupos_idGrupos': '',
          'estadoEvento': '3',
        })
      }else{
        this.idEventExist = this.dataEvent.idEvento;
        this.dateEvent = new Date(this.dataEvent.fechaEvento);
        this.dateTerminate = new Date(this.dataEvent.fechaEvento);
        this.eventGroupForm.setValue({
          'idEvento': this.dataEvent.idEvento,
          'nombreEvento': this.dataEvent.nombreEvento,
          'descripcionEvento': this.dataEvent.descripcionEvento,
          'fechaEvento': this.dataEvent.fechaEvento,
          'tipoEvento': this.dataEvent.tipoEvento,
          'participantesTotales': this.dataEvent.participantesTotales,
          'Grupos_idGrupos': this.dataEvent.Grupos_idGrupos,
          'estadoEvento': this.dataEvent.estadoEvento
        })
        this.api.getTotalPersonsEvent(this.idEventExist).subscribe((data) =>{
          console.log("total: " + data[0].total);
          this.totalPersonsIn = data[0].total;
        })
        this.dateEvent.setDate(this.dateEvent.getDate() - 2);
        this.dateTerminate.setDate(this.dateTerminate.getDate() + 2);

        console.log("FECHA ACTUALIF: " + this.actualDate);
        console.log("FECHA REALIZACIONIF: " + this.dateEvent);
        if(this.actualDate < this.dateTerminate){
          this.terminate = false
          
        }else if(this.actualDate >= this.dateTerminate){
          this.terminate = true;
        }

        this.api.getPersonExistEvent(this.auth.desencriptar(localStorage.getItem('id')), this.idEventExist).subscribe(data => {
          console.log(data);

          if(data){
            this.existPerson = 1;
          }else{
            this.existPerson = 2;
          }
          console.log(this.existPerson );
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

  modalOpen2(content:any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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


  //Modal Create Event
  postForm(form:EventI){
    console.log(form);
    let idGrupos = this.route.snapshot.paramMap.get('id');
    form.Grupos_idGrupos = Number(idGrupos);
    this.api.postEvent(form, this.auth.desencriptar(localStorage.getItem('id')), form.Grupos_idGrupos).subscribe( data => {
      console.log(data);
    })
    this.createEventForm.reset();
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }

  //join event person.
  postJoinEvent(){
    this.joinEventForm.setValue({
      'Evento_IdEvento': this.idEventExist,
      'personaIngresada': this.auth.desencriptar(localStorage.getItem('id'))
    })
    // this.dataPersonJoin.personaIngresada[0] = this.auth.desencriptar(localStorage.getItem('id'));
    // this.dataPersonJoin.idParticipantesEvento[0] = this.idEventExist;
    this.api.postJoinPersonEvent(this.joinEventForm.value).subscribe(data =>{
      console.log(data);
    });
    this.refresh();
  }

}
