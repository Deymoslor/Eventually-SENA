import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
  likesI!: LikesI[];
  public previsualizacion!: string;
  public archivos: any = [];

  constructor(private activerouter:ActivatedRoute , private router:Router, private ApiGroup:YourGroupsService, private likes: ApiService, private sanitizer: DomSanitizer) { }

  datesGroup!: Group;
  editForm = new FormGroup({
    idGrupos: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
  })

  ngOnInit(): void {
    this.likes.getAllLikes(1).subscribe(data=>{

      this.likesI = data;
    })
  }
  ngOnChanges(): void {
    console.log(this.childMessage);
    let idGrupos = this.activerouter.snapshot.paramMap.get('id')
    console.log(idGrupos);
    if(Number(idGrupos)){
      this.ApiGroup.getDetailsYourGroup(Number(idGrupos)).subscribe((data: any) =>{
        this.datesGroup =data[0];
        console.log(data);
        this.editForm.setValue({
          'idGrupos': this.datesGroup.idGrupos,
          'descripcionGrupo': this.datesGroup.descripcionGrupo,
          'privacidadGrupo': this.datesGroup.privacidadGrupo,
        });
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
    })
  }
  refresh(): void { window.location.reload(); }

}
