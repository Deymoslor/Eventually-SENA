import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { Group } from '../see-groups/group';
import { YourGroupsService } from '../your-groups/your-groups.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-create-groups',
  templateUrl: './create-groups.component.html',
  styleUrls: ['./create-groups.component.scss']
})
export class CreateGroupsComponent implements OnInit {

  likesI!: LikesI[];
  public previsualizacion!: string;
  public archivos: any = [];

  share() {
    window.alert('The product has been shared!');
  }

  createYourGroupForm = new FormGroup({
    idGroups: new FormControl(''),
    nombreGrupo: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    InvitadosTotales: new FormControl(''),
    check: new FormControl(''),
    gustos_idGusto: new FormControl(''),
    idPersona: new FormControl(''),
  });

  // swal("Oops!", "Something went wrong on the page!", "error");

  constructor(private create:YourGroupsService, private fb:FormBuilder, private likes: ApiService, private auth: AuthService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.likes.getAllLikes(1).subscribe(data=>{
      console.log(data);

      this.likesI = data;
    })

    this.createYourGroupForm = this.fb.group({
      nombreGrupo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      descripcionGrupo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      privacidadGrupo: ['', Validators.required],
      InvitadosTotales: ['0'],
      check: ['', Validators.required],
      gustos_idGusto: ['', Validators.required],
      idPersona: [this.auth.desencriptar(localStorage.getItem('id'))]
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
    form.imagen = this.previsualizacion;
    console.log(form);
    this.create.postYourGroup(form).subscribe((data: any) => {
      console.log(data);
    })
    this.createYourGroupForm.reset();
  }

  guardar(){
    console.log('si');
  }

  clearForm(){
    this.createYourGroupForm.reset();
  }

}
