import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { Group } from '../modal-edit-groups/group.interface';
import { GroupsServiceService } from '../service/groups-service.service';

@Component({
  selector: 'app-modal-groups',
  templateUrl: './modal-groups.component.html',
  styleUrls: ['./modal-groups.component.scss']
})
export class ModalGroupsComponent implements OnInit {

  likesI!: LikesI[];
  public previsualizacion!: string;
  public archivos: any = [];
  model: NgbDateStruct | undefined;
  date: {year: number; month: number;} | undefined;

  createGroupForm = new FormGroup({
    idGroups: new FormControl(''),
    nombreGrupo: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    InvitadosTotales: new FormControl(''),
    check: new FormControl(''),
    EstadosGrupo_idEstadosGrupo1: new FormControl(''),
    gustos_idGusto: new FormControl('')
  });

  constructor(private apiGroup:GroupsServiceService, private fb: FormBuilder, private likes: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.likes.getAllLikes(1).subscribe(data=>{
      console.log(data);

      this.likesI = data;
    })

    this.createGroupForm = this.fb.group({
      nombreGrupo: ['', [Validators.required, Validators.minLength(2)]],
      descripcionGrupo: ['', [Validators.required, Validators.minLength(5)]],
      privacidadGrupo: ['', Validators.required],
      InvitadosTotales: ['0', Validators.required],
      check: ['', Validators.required],
      EstadosGrupo_idEstadosGrupo1: ['2', Validators.required],
      gustos_idGusto: ['', Validators.required],
    })
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

  postForm(form:Group){
    console.log(form);

    this.apiGroup.postGroup(form).subscribe(data => {
      console.log(data);
    })
    this.createGroupForm.reset();
  }

  guardar(){
    console.log('si');
  }

  clearForm(){
    this.createGroupForm.reset();
  }

  refresh(): void { window.location.reload(); }

}
