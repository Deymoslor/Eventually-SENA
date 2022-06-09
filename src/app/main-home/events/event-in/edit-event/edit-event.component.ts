import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';

import { EventI } from 'src/app/models/event.interface';
import { ApiService } from '../../../../services/api/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  previsualizacion!: string;
  public archivos: any = [];
  constructor(private activeRouter: ActivatedRoute, private router:Router, 
    private api:ApiService,  private fb: FormBuilder, private sanitizer: DomSanitizer) { }

  dataEvent!:EventI;
  idEvent!:number;

  editFormIn = new FormGroup({
    idEvento: new FormControl(''),
    nombreEvento: new FormControl(''),
    descripcionEvento: new FormControl(''),
    fechaEvento: new FormControl(''),
    tipoEvento: new FormControl(''),
    imagen: new FormControl(''),
    participantesTotales: new FormControl(''),
    estadoEvento: new FormControl('')
  })

  ngOnInit(): void {
    
    let eventId = this.activeRouter.snapshot.paramMap.get('idE');
    this.api.getSingleEvent(eventId).subscribe((data: any) =>{
      this.dataEvent =data[0];
      let actualImage = this.dataEvent.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost);
        
      this.previsualizacion = actualImage;
      console.log(this.dataEvent.imagen);
      this.editFormIn.setValue({
        'idEvento': this.dataEvent.idEvento,
        'nombreEvento': this.dataEvent.nombreEvento,
        'descripcionEvento': this.dataEvent.descripcionEvento,
        'fechaEvento': this.dataEvent.fechaEvento,
        'tipoEvento': this.dataEvent.tipoEvento,
        'imagen': '',
        'participantesTotales': this.dataEvent.participantesTotales,
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
          'imagen': this.previsualizacion,
          'participantesTotales': this.dataEvent.participantesTotales,
          'estadoEvento': 1
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
          'estadoEvento': 0
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
    form.imagen = this.previsualizacion;
    console.log(form);
    this.api.putEvent(form).subscribe(data=>{
      console.log(data);
    });
    // this.idEvent = this.editForm.get('idEvent')?.value;
    this.goback(this.dataEvent.Grupos_idGrupos);
  }

}
