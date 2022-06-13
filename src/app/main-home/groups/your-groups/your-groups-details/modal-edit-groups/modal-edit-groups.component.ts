import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'src/app/core/service/alertas.service';
import { GlobalConstants } from 'src/app/global-constants';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { Group } from '../../../see-groups/group';
import { YourGroupsService } from '../../your-groups.service';

@Component({
  selector: 'app-modal-edit-groups',
  templateUrl: './modal-edit-groups.component.html',
  styleUrls: ['./modal-edit-groups.component.scss']
})
export class ModalEditGroupsComponent implements OnInit {

  @Input() childMessage: number | undefined;
  public previsualizacion!: string;
  public archivos: any = [];

  constructor(private activerouter:ActivatedRoute ,
    private router:Router,
    private fb: FormBuilder,
    private ApiGroup:YourGroupsService,
    private likes: ApiService,
    private sanitizer: DomSanitizer,
    private alertas:AlertasService,) { }

  datesGroup!: Group;
  editForm = new FormGroup({
    idGrupos: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    imagen: new FormControl('')
  })

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.childMessage);
    let idGrupos = this.activerouter.snapshot.paramMap.get('id')
    console.log(idGrupos);
    if(Number(idGrupos)){
      this.ApiGroup.getDetailsYourGroup(Number(idGrupos)).subscribe((data: any) =>{
        this.datesGroup =data[0];
        console.log(data);
        this.editForm = this.fb.group({
          idGrupos: [this.datesGroup.idGrupos],
          descripcionGrupo: [this.datesGroup.descripcionGrupo, [Validators.required, Validators.minLength(5)]],
          privacidadGrupo: [this.datesGroup.privacidadGrupo, Validators.required],
          imagen: [this.datesGroup.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost)]
        })
        console.log(this.editForm.get('idGrupos')?.value);
      });
    }else{
      console.log("no se pudo :(");
    };

    // let eventId = this.activeRouter.snapshot.paramMap.get('idE');
    // this.api.getSingleEvent(eventId).subscribe((data: any) =>{
    //   this.dataEvent =data[0];
    //   this.editFormIn.setValue({
    //     'idEvento': this.dataEvent.idEvento,
    //     'nombreEvento': this.dataEvent.nombreEvento,
    //     'descripcionEvento': this.dataEvent.descripcionEvento,
    //     'fechaEvento': this.dataEvent.fechaEvento,
    //     'tipoEvento': this.dataEvent.tipoEvento,
    //     'participantesTotales': this.dataEvent.participantesTotales,
    //     'estadoEvento': this.dataEvent.estadoEvento
    //   })
    // })
  }

  capturarFile(event): void {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen)
    })
    this.archivos.push(archivoCapturado);
    console.log(event);
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

  postEditForm(form: Group)
  {
    form.imagen = this.previsualizacion;
    console.log(form);
    this.ApiGroup.putGroup(form).subscribe( data =>{
      console.log(data);
      let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('has editado grupo','Edición exitosa');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
    })
  }

}
