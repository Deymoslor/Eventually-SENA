import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updatePersonaI } from '../updatePersonaI';
import { UpdateServiceService } from '../settingsService/update-service.service';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from '../../../login-register/forgot-password/forgot-password.component';
import { updatePasswordPersonaI } from '../updatePasswrodPersonaI';
import { AuthService } from 'src/app/core/service/auth.service';
import { IdPerson, LikesI, LikesPerson } from 'src/app/models/likes';
import { ApiService } from '../../../services/api.service';
import { PersonaI } from 'src/app/dashboard/crud-users/modal-users/personaI.interface';

@Component({
  selector: 'app-update-user-account',
  templateUrl: './update-user-account.component.html',
  styleUrls: ['./update-user-account.component.scss'],
})
export class UpdateUserAccountComponent implements OnInit {

  constructor(

    private updateServiceService: UpdateServiceService,
    private router: Router,
    private authService: AuthService,
    private ApiService: ApiService

  ) { }

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

  //Creamos el FormGroup que nos sirve para poder tener el formulario con los campos correctos y en caso de necesitar validators.
  editarForm = new FormGroup({
    idPersona: new FormControl(''),
    token: new FormControl(''),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    documento: new FormControl(''),
    fechaNacimiento: new FormControl('')
  });

  //Creamos formulario para poder actualizar contraseña.
  passwordForm = new FormGroup({
    idPersona: new FormControl(''),
    token: new FormControl(''),
    oldPassword: new FormControl(''),
    newPassword: new FormControl('')
  })

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
      // for (let i = 0; i < this.misGustos.length; i++) {
      //   // const element = array[index];
      //   this.listaMisGustos = i;
      // }
      // console.log(this.misGustos);
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
      })

    });
  }

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

    this.updateServiceService.getLikeName(nombreGusto).subscribe((data:any) =>{
      this.datosGustoD = data;
        'idGusto' : this.datosGustoD[0].idGusto,
        'idPersona' : this.authService.desencriptar(localStorage.getItem('id'))
      });
      // console.log(this.deleteLikeForm.value);
      this.updateServiceService.deleteLikePerson(this.deleteLikeForm.value).subscribe(data =>{
        // console.log(data)
        window.location.reload();
      });
    });



  texto(){
    console.log("Test");
  }

  //Método que se ejecuta cuando se hace submit de formulario para enviar los datos editados.
  postForm(form:updatePersonaI){

    //llamamos el método de actualizar desde el servicio.
    this.updateServiceService.putPerson(form).subscribe((data:any) =>{
      //Recargamos página.
      window.location.reload();
    });

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

      //regargamos página.
      window.location.reload();

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

}
