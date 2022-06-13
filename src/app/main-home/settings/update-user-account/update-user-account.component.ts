import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { updatePersonaI } from '../updatePersonaI';
import { UpdateServiceService } from '../settingsService/update-service.service';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from '../../../login-register/forgot-password/forgot-password.component';
import { updatePasswordPersonaI } from '../updatePasswrodPersonaI';
import { AuthService } from 'src/app/core/service/auth.service';
import { IdPerson, LikesI, LikesPerson } from 'src/app/models/likes';
import { ApiService } from '../../../services/api.service';
import { PersonaI } from 'src/app/dashboard/crud-users/modal-users/personaI.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertasService } from 'src/app/core/service/alertas.service';
import { ResponseI } from '../../../core/ui/response.interface';
import { GlobalConstants } from 'src/app/global-constants';
import { updateImagenProfile } from 'src/app/menu/user-menu/updateImagenProfile.interface';
import { ImagenProfileService } from '../imagenProfileService/imagen-profile.service';

@Component({
  selector: 'app-update-user-account',
  templateUrl: './update-user-account.component.html',
  styleUrls: ['./update-user-account.component.scss'],
})
export class UpdateUserAccountComponent implements OnInit {

  // --------Inicio---------- Variables para las validaciones.
  editarForm : FormGroup;

  passwordForm : FormGroup;

  // --------Fin----------Variables para las validaciones.

  //Variable para previsualizar la imagen.
  public previsualizacion: string = '';
  //Variable para almacenar en archivos.
  public archivos: any = [];

  //Variables generales para la toma de imagenes.
  public httpLocalHost = GlobalConstants.httpLocalHost;

  //interfaz de actualización de la persona.
  public updatePersona! : updatePersonaI;

  //interfaz de la imagen de la persona.
  public imagenProfile! : updateImagenProfile;

  //Form group para cambiar imagen.
  imagenPerfilForm  = new FormGroup({
    idPersona: new FormControl(''),
    imagen: new FormControl(''),
    token: new FormControl(''),
  })

  constructor(

    private updateServiceService: UpdateServiceService,
    private router: Router,
    private authService: AuthService,
    private ApiService: ApiService,
    private imagenProfileService: ImagenProfileService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private alertas:AlertasService,

  ) {

    //Creamos el FormGroup que nos sirve para poder tener el formulario con los campos correctos y en caso de necesitar validators.
    this.editarForm = this.formBuilder.group ({
      idPersona : [''],
      token : [''],
      nombre : ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      apellidos : ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      documento : ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
      fechaNacimiento : ['',Validators.required],
      Email : ['',[Validators.required, Validators.email]],
    });

    //Creamos formulario para poder actualizar contraseña.
    this.passwordForm = this.formBuilder.group({
      idPersona: [],
      token: [],
      oldPassword: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      newPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    })

  }

  //Creamos una variable que será de tipo updatePersonaI para poder almacenar los datos traidos con la consulta. Para esto, además necesitamos un formGroup.
  datosPersona!:updatePersonaI;

  //Creamos una variable que será de tipo any para almacenar lo traido, el id del gusto y poder hacer el eliminado.
  datosGustoD!:any;

  //Creamos una variable que será de tipo any para almacenar lo traido, el id del gusto y poder hacer la creación.
  datosGustoC!:any;

  //Creamos una variable que nos servirá para poder quitar con id específico el gusto de una persona.
  datosGustoPersona!:any;

  //Creamos variable formulario:
  deleteLikeForm = new FormGroup({
    //Aquí asignamos un elemento, email y password a un formControl que recibe 2 parámetros, el valor por defecto del campo y las validaciones que queramos.
    idGusto : new FormControl('',Validators.required),
    idPersona : new FormControl('',Validators.required)
  });

  //Creamos variable formulario:
  createLikeForm = new FormGroup({
    //Aquí asignamos un elemento, email y password a un formControl que recibe 2 parámetros, el valor por defecto del campo y las validaciones que queramos.
    gustos_idGusto : new FormControl('',Validators.required),
    Persona_idPersona : new FormControl('',Validators.required)
  });

  misGustos!:LikesPerson[];
  listaMisGustos!:any;
  gustos!:LikesI[];

  ngOnInit(): void {

    //----------------------------Cosas del gusto.

    this.updateServiceService.getAllLikes(this.authService.desencriptar(localStorage.getItem('id'))).subscribe(data =>{
      this.gustos=data;
      // console.log(this.gustos);
    });

    this.updateServiceService.getPersonLikes(this.authService.desencriptar(localStorage.getItem('id'))).subscribe(data =>{
      this.misGustos=data;
    });

    //----------------------------Cosas de la persona.

    let idPersona = this.authService.desencriptar(localStorage.getItem('id'));
    // console.log(idPersona);

    let token = localStorage.getItem('token');

    //llamamos al servicio para obtener la información de todos los campos de la persona.
    this.updateServiceService.getSinglePerson(idPersona).subscribe((data:any) =>{
      //Comprobamos que datos trae data.
      // console.log(data);

      //Ahora queremos asignar a el FormGroup anteriormente definido los valores que estamos trayendo desde el servicio.

      //para poder acceder al array que está trayendo primero debemos acceder al elemento 0 pues es un array dentro de otro array por ende siempre debemos acceder primero a la posición 0.
      this.datosPersona = data[0];

      //Comprobamos que datos nos está trayendo ahora este nuevo data filtrado por posición 0.
      // console.log(this.datosPersona);

      //llamamos nuestro formulario de actualizar información para empezar a asignarle la información de los campos.
      this.editarForm.setValue({
        'idPersona' : idPersona,
        'token' : token,
        'nombre' : this.datosPersona.nombre,
        'apellidos' : this.datosPersona.apellidos,
        'documento' : this.datosPersona.documento,
        'fechaNacimiento' : this.datosPersona.fechaNacimiento,
        'Email' : this.datosPersona.Email,
      })

    });
  }

  //Método para capturar imagen.
  capturarFile(event): void {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      // console.log(imagen)
    })
    this.archivos.push(archivoCapturado);
    // console.log(event);
  }

  //Método para transformar imagen a base64.
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

  agregarGusto(nombreGusto:any){
    console.log('Click agregar');
    this.updateServiceService.getLikeId(nombreGusto).subscribe((data:any) =>{
      this.datosGustoC = data;
      this.createLikeForm.setValue({
        'gustos_idGusto' : this.datosGustoC[0].idGusto,
        'Persona_idPersona' : this.authService.desencriptar(localStorage.getItem('id'))
      });
      // console.log(this.deleteLikeForm.value);
      this.updateServiceService.createLikePerson(this.createLikeForm.value).subscribe(data =>{
        // console.log(data)
        window.location.reload();
      });
    });

  }

  quitarGusto(nombreGusto:any){
    console.log('Click quitar');
    this.updateServiceService.getLikeId(nombreGusto).subscribe((data:any) =>{
      this.datosGustoD = data;
      this.deleteLikeForm.setValue({
        'idGusto' : this.datosGustoD[0].idGusto,
        'idPersona' : this.authService.desencriptar(localStorage.getItem('id'))
      });
      // console.log(this.deleteLikeForm.value);
      this.updateServiceService.deleteLikePerson(this.deleteLikeForm.value).subscribe(data =>{
        // console.log(data)
        window.location.reload();
      });
    });
  }

  texto(){
    console.log("Test");
  }

  //Método que se ejecuta cuando se hace submit de formulario para enviar los datos editados.
  postForm(form:updatePersonaI){
    //llamamos el método de actualizar desde el servicio.
    this.updateServiceService.putPerson(form).subscribe((data:any) =>{
      let respuesta:ResponseI = data;
      //Verificamos si la respuesta es exitosa.
      if(respuesta.status == 'ok'){
        this.alertas.showSuccess('Información de perfil actualizada','Actualización exitosa');
        // console.log("Entrando aquí");
        setTimeout(() =>{
          //redirecionamos a el login.
          window.location.reload();
        },2000);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
        setTimeout(() =>{
          //Recargamos el sitio.
          window.location.reload();
        },2000);
      }
    });
  }

  //Método para actualizar imagen:
  actualizarImagen(form:any){
    //le pasamos al formulario la imagen previsualizada.
    form.imagen = this.previsualizacion;
    //le pasamos al formulario el token.
    form.token = localStorage.getItem('token');
    //le pasamos al formulario el id.
    form.idPersona = this.authService.desencriptar(localStorage.getItem('id'));

    this.imagenProfileService.putPerson(form).subscribe((data:any) =>{
      // console.log(data);
      let respuesta:ResponseI = data;
      //Verificamos si la respuesta es exitosa.
      if(respuesta.status == 'ok'){
        this.alertas.showSuccess('Imagen de perfil actualizada','Actualización exitosa');
        // console.log("Entrando aquí");
        setTimeout(() =>{
          //rRecargamos el sitio.
          window.location.reload();
        },2000);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Problemas encontrados');
        setTimeout(() =>{
          //redirecionamos a el login.
          window.location.reload();
        },2000);
      }
    })

  }

  //Método que se ejecuta cuando se hace click en actualizar contraseña y nos permite llenar campo de token y id.
  completarForm(form:updatePasswordPersonaI){

    //Retomamos el id
    let idPersona = this.authService.desencriptar(localStorage.getItem('id'));

    //Retomamos el token
    let token = localStorage.getItem('token');

    //llamamos nuestro formulario para empezar a asignarle la información de los campos.
    this.passwordForm.setValue({
      'idPersona' : idPersona,
      'token' : token,
      'oldPassword' : form.oldPassword,
      'newPassword' : form.newPassword
    })
    // console.log(this.passwordForm);
  }

  //Método que se ejecuta para actualizar la contraseña comprobando antigua y nueva.
  changePassword(form:updatePasswordPersonaI){

    //Llamamos al método del servicio que nos permite actualizar la contraseña.
    this.updateServiceService.putPassword(form).subscribe((data:any) =>{
      // console.log(data);
      let respuesta:ResponseI = data;
      //Verificamos si la respuesta es exitosa.
      if(respuesta.status == 'ok'){
        this.alertas.showSuccess('Contraseña actualizada correctamente','Contraseña actualizada');
        // console.log("Entrando aquí");
        setTimeout(() =>{
          //redirecionamos a el login.
          window.location.reload();
        },2000);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
        setTimeout(() =>{
          //redirecionamos a el login.
          window.location.reload();
        },2000);
      }
    });
  }

  //Creamos método para pedir el token.
  getToken(){
    //Pedimos que del almacenamiento local nos pase la variable token.
    return localStorage.getItem('token');
  }

  //método para recuperación de password en caso de no saberlo.
  PasswordRecovery(){
    this.router.navigate(['loginRegister/forgot-password']);
  }

  //Método para solicitar cambio de correo electrónico.
  emailChange(){
    this.router.navigate(['loginRegister/change-email']);
  }

}
