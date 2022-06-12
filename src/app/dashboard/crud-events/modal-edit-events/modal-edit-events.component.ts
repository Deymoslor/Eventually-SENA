import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { EventI } from '../../../models/event.interface'; 
import { ApiService } from 'src/app/services/api/api.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-modal-edit-events',
  templateUrl: './modal-edit-events.component.html',
  styleUrls: ['./modal-edit-events.component.scss']
})
export class ModalEditEventsComponent implements OnInit {

  @Input() childMessage!: number;

  editForm = new FormGroup({
    idEvento: new FormControl(''),
    nombreEvento: new FormControl(''),
    descripcionEvento: new FormControl(''),
    fechaEvento: new FormControl(''),
    tipoEvento: new FormControl(''),
    imagen: new FormControl(''),
    participantesTotales: new FormControl(''),
    Grupos_idGrupos: new FormControl(''),
    estadoEvento: new FormControl(''),
    check: new FormControl('')
  })
  actualDate!: Date;
  dateS!: string;

  constructor(private api: ApiService, private alertas: AlertasService, private sanitizer: DomSanitizer,
    private fb: FormBuilder) { 
    this.editForm = this.fb.group({
      idEvento: ['',],
      nombreEvento: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      tipoEvento: ['', Validators.required],
      descripcionEvento: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      fechaEvento: ['', Validators.required],
      imagen: ['',],
      Grupos_idGrupos: ['',],
      participantesTotales: ['2', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(2), Validators.max(200)]],
      estadoEvento: ['',],
      check: ['',]
    });
  }


  previsualizacion!: string;
  public archivos: any = [];
  actualImage!: string;

  dataEvent!: EventI;
  
  idEvent!:number;


  ngOnChanges(): void{

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    this.actualDate = date;
    console.log("fecha actual: " + this.actualDate);


    // date = new Date(year + "-" + month + "-" + day);
    // console.log("fecha: " + date);
    // date.setDate( date.getDate() + 2);
    // console.log(date);
    // month = this.actualDate.getMonth() + 1;


    this.dateS = this.actualDate.getFullYear() + "-" + ((this.actualDate.getMonth() + 1).toString().padStart(2,'0')) + "-" + ((this.actualDate.getDate()).toString().padStart(2,'0'));
    console.log("String fecha: " + this.dateS);
    

    if(this.childMessage > 0){
      this.idEvent = this.childMessage;
      this.api.getSingleEvent(this.idEvent).subscribe((data: any) =>{
        console.log(data);
       this.dataEvent =data[0];
       this.actualImage = this.dataEvent.imagen;
        
      if (this.dataEvent.imagen) {
        this.previsualizacion = this.dataEvent.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost);
      }

        this.editForm.setValue({
          'idEvento': this.dataEvent.idEvento,
          'nombreEvento': this.dataEvent.nombreEvento,
          'descripcionEvento': this.dataEvent.descripcionEvento,
          'fechaEvento': this.dataEvent.fechaEvento,
          'tipoEvento': this.dataEvent.tipoEvento,
          'imagen': '',
          'participantesTotales': this.dataEvent.participantesTotales,
          'Grupos_idGrupos': this.dataEvent.Grupos_idGrupos,
          'estadoEvento': this.dataEvent.estadoEvento,
          'check': null
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
    form.imagen = this.previsualizacion.replace(GlobalConstants.httpLocalHost, 'C:/xampp/htdocs');
    this.api.putEvent(form).subscribe(data=>{
      console.log(data);
      let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Edicion exitosa','Registro exitoso');
            setTimeout(()=>{
              this.refresh();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(()=>{
              // this.refresh();
            },2000);
          }
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
          'imagen': '',
          'participantesTotales': this.dataEvent.participantesTotales,
          'Grupos_idGrupos': this.dataEvent.Grupos_idGrupos,
          'estadoEvento': 1,
          'check': null
      })
    }else if (num == 1) {
      console.log("hola soy el num " + num);
      this.editForm.setValue({
        'idEvento': this.dataEvent.idEvento,
          'nombreEvento': this.dataEvent.nombreEvento,
          'descripcionEvento': this.dataEvent.descripcionEvento,
          'fechaEvento': this.dataEvent.fechaEvento,
          'tipoEvento': this.dataEvent.tipoEvento,
          'imagen': '',
          'participantesTotales': this.dataEvent.participantesTotales,
          'Grupos_idGrupos': this.dataEvent.Grupos_idGrupos,
          'estadoEvento': 3,
          'check': null
      })
    } 
  }

  capturarFile(event): void {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log("previsualizacion: " + this.previsualizacion);
    })
    this.archivos.push(archivoCapturado);
    // console.log(event);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) =>{
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return null;
    }
    return $event;
  });

}
