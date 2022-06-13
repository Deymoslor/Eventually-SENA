import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';

import { EventI } from 'src/app/models/event.interface';
import { ApiService } from '../../../../services/api/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalConstants } from 'src/app/global-constants';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  previsualizacion!: string;
  public archivos: any = [];
  actualImage!: string;

  editFormIn = new FormGroup({
    idEvento: new FormControl(''),
    nombreEvento: new FormControl(''),
    descripcionEvento: new FormControl(''),
    fechaEvento: new FormControl(''),
    tipoEvento: new FormControl(''),
    imagen: new FormControl(''),
    participantesTotales: new FormControl(''),
    estadoEvento: new FormControl(''),
    check: new FormControl('')
  })
  actualDate: any;
  dateS!: string;


  constructor(private activeRouter: ActivatedRoute, private router:Router, 
    private api:ApiService,  private fb: FormBuilder, private sanitizer: DomSanitizer,
    private alertas: AlertasService) {

      this.editFormIn = this.fb.group({
        idEvento: ['',],
        nombreEvento: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        tipoEvento: ['', Validators.required],
        descripcionEvento: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
        fechaEvento: ['', Validators.required],
        imagen: ['',],
        participantesTotales: ['2', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(2), Validators.max(200)]],
        estadoEvento: ['',],
        check: ['', Validators.requiredTrue]
      });
     }

  dataEvent!:EventI;
  idEvent!:number;

  
  ngOnInit(): void {

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
    
    let eventId = this.activeRouter.snapshot.paramMap.get('idE');
    this.api.getSingleEvent(eventId).subscribe((data: any) =>{
      this.dataEvent =data[0];
      this.actualImage = this.dataEvent.imagen;
        
      this.previsualizacion = this.dataEvent.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost);
      console.log(this.dataEvent.imagen);
      this.editFormIn.setValue({
        'idEvento': this.dataEvent.idEvento,
        'nombreEvento': this.dataEvent.nombreEvento,
        'descripcionEvento': this.dataEvent.descripcionEvento,
        'fechaEvento': this.dataEvent.fechaEvento,
        'tipoEvento': this.dataEvent.tipoEvento,
        'imagen': '',
        'participantesTotales': this.dataEvent.participantesTotales,
        'estadoEvento': this.dataEvent.estadoEvento,
        'check': null
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
          'imagen': this.previsualizacion,
          'participantesTotales': this.dataEvent.participantesTotales,
          'estadoEvento': 1,
          'check': null
      })
    }else if (num == 1) {
      this.editFormIn.setValue({
          'idEvento': this.dataEvent.idEvento,
          'nombreEvento': this.dataEvent.nombreEvento,
          'descripcionEvento': this.dataEvent.descripcionEvento,
          'fechaEvento': this.dataEvent.fechaEvento,
          'tipoEvento': this.dataEvent.tipoEvento,
          'imagen': this.previsualizacion,
          'participantesTotales': this.dataEvent.participantesTotales,
          'estadoEvento': 0,
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

  

  goback(idE:number ){
    this.router.navigate(['groups/your-groups/groups/', idE]);
  }

  postEditForm(form: EventI){
    form.imagen = this.previsualizacion.replace(GlobalConstants.httpLocalHost, 'C:/xampp/htdocs');
    console.log(form);
    this.api.putEvent(form).subscribe(data=>{
      console.log(data);
      let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Union exitosa','Registro exitoso');
            setTimeout(()=>{
              this.goback(this.dataEvent.Grupos_idGrupos);
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(()=>{
              this.goback(this.dataEvent.Grupos_idGrupos);
            },2000);
          }
    });
    // this.idEvent = this.editForm.get('idEvent')?.value;
    // this.goback(this.dataEvent.Grupos_idGrupos);
  }

  refresh(){
    window.location.reload();
  }

}
