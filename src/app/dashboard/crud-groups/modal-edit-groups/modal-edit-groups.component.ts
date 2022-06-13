import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Group } from "./group.interface";
import { GroupsServiceService } from "../service/groups-service.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from 'src/app/services/api.service';
import { LikesI } from 'src/app/models/likes';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertasService } from 'src/app/core/service/alertas.service';
import { ResponseI } from 'src/app/core/ui/response.interface';

@Component({
  selector: 'app-modal-edit-groups',
  templateUrl: './modal-edit-groups.component.html',
  styleUrls: ['./modal-edit-groups.component.scss']
})
export class ModalEditGroupsComponent implements OnInit {

  @Input() childMessage!: number;
  likesI!: LikesI[];
  public previsualizacion!: string;
  public archivos: any = [];

  constructor(private activerouter:ActivatedRoute , private router:Router, private ApiGroup:GroupsServiceService, private likes: ApiService, private sanitizer: DomSanitizer, private alertas:AlertasService) { }

  datesGroup!: Group;
  editForm = new FormGroup({
    idGrupos: new FormControl(''),
    nombreGrupo: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    InvitadosTotales: new FormControl(''),
    EstadosGrupo_idEstadosGrupo1: new FormControl(''),
    gustos_idGusto: new FormControl(''),
  })

  ngOnInit(): void {
    // this.activerouter.snapshot.paramMap.get('id')
    this.likes.getAllLikes(1).subscribe(data=>{
      console.log(data);

      this.likesI = data;
    })
  }

  ngOnChanges(): void {
    console.log(this.childMessage);
    if(this.childMessage > 0){
      this.ApiGroup.getSingleGroup(this.childMessage).subscribe((data: any) =>{
        this.datesGroup =data[0];
        this.editForm.setValue({
          'idGrupos': this.datesGroup.idGrupos,
          'nombreGrupo': this.datesGroup.nombreGrupo,
          'descripcionGrupo': this.datesGroup.descripcionGrupo,
          'privacidadGrupo': this.datesGroup.privacidadGrupo,
          'InvitadosTotales': this.datesGroup.InvitadosTotales,
          'EstadosGrupo_idEstadosGrupo1': this.datesGroup.EstadosGrupo_idEstadosGrupo1,
          'gustos_idGusto': this.datesGroup.gustos_idGusto
        });
        console.log(this.editForm.get('idGrupos')?.value);
      });
    };
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
      let respuesta:ResponseI = data[0];
      //Verificamos si la respuesta es exitosa.
      if(respuesta.status == 'ok'){
        this.alertas.showSuccess('Grupo actualizado correctamente','Actulización exitosa');
        setTimeout(() =>{
          window.location.reload();
        },2000);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
        setTimeout(() =>{
          window.location.reload();
        },2000);
      }
    })
  }
  refresh(): void { window.location.reload(); }
}
