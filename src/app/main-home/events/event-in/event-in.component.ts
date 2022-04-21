import { Component, OnInit, Input } from '@angular/core';
import { EventI } from 'src/app/models/event.interface';
import { ApiService } from 'src/app/services/api/api.service';

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-in',
  templateUrl: './event-in.component.html',
  styleUrls: ['./event-in.component.scss']
})
export class EventInComponent implements OnInit {

  @Input() idGroup;

  dataEvent!: EventI;
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

  constructor(private api:ApiService, private router:Router, private modalService: NgbModal, private route: ActivatedRoute, private fb: FormBuilder,) { }
  closeResult = '';
  
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
    this.api.postEvent(form).subscribe( data => {
      console.log(data);
    })
    this.createEventForm.reset();
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }

}
