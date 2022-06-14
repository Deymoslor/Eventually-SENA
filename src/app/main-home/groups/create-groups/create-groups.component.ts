import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { Group } from '../see-groups/group';
import { YourGroupsService } from '../your-groups/your-groups.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';
import { AlertasService } from 'src/app/core/service/alertas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-groups',
  templateUrl: './create-groups.component.html',
  styleUrls: ['./create-groups.component.scss']
})
export class CreateGroupsComponent implements OnInit {

  createYourGroupForm : FormGroup;

  likesI!: LikesI[];
  public previsualizacion!: string;
  public archivos: any = [];
  idGrupos = this.route.snapshot.paramMap.get('id');

  share() {
    window.alert('The product has been shared!');
  }

  // swal("Oops!", "Something went wrong on the page!", "error");

  constructor(private create:YourGroupsService,
    private fb:FormBuilder,
    private likes: ApiService,
    private auth: AuthService,
    private sanitizer: DomSanitizer,
    private alertas:AlertasService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder:FormBuilder,
    ) {

      this.createYourGroupForm = this.formBuilder.group({
        nombreGrupo: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/), Validators.minLength(2),Validators.maxLength(30)]],
        descripcionGrupo: ['',[Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/), Validators.minLength(2),Validators.maxLength(300)]],
        privacidadGrupo: ['', Validators.required],
        check: ['', Validators.requiredTrue],
        imagen: ['', [Validators.required]],
        gustos_idGusto: ['', Validators.required],
        idPersona: [this.auth.desencriptar(localStorage.getItem('id'))],
      });
    }

  ngOnInit(): void {
    this.likes.getAllLikes(1).subscribe(data=>{
      console.log(data);

      this.likesI = data;
    })

    // this.createYourGroupForm = this.fb.group({
    //   nombreGrupo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    //   descripcionGrupo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
    //   privacidadGrupo: ['', Validators.required],
    //   InvitadosTotales: ['0'],
    //   check: ['', Validators.required],
    //   gustos_idGusto: ['', Validators.required],
    //   idPersona: [this.auth.desencriptar(localStorage.getItem('id'))]
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

  postForm(form:Group){
    if (this.previsualizacion) {
      form.imagen = this.previsualizacion;
      console.log(form);
      this.create.postYourGroup(form).subscribe((data: any) => {
        let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('has creado el grupo','creación exitosa');
            this.router.navigate(['main/groups/your-groups']);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            // window.location.reload();
          }
      })
      this.createYourGroupForm.reset();
    }
  }

  guardar(){
    console.log('si');
  }

  clearForm(){
    this.createYourGroupForm.reset();
  }

}
