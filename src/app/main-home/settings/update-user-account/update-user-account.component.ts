import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { updatePersonaI } from '../updatePersonaI';
import { UpdateServiceService } from '../settingsService/update-service.service';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from '../../../login-register/forgot-password/forgot-password.component';

@Component({
  selector: 'app-update-user-account',
  templateUrl: './update-user-account.component.html',
  styleUrls: ['./update-user-account.component.scss']
})
export class UpdateUserAccountComponent implements OnInit {

  constructor(

    private updateServiceService: UpdateServiceService,
    private router: Router

  ) { }

  //Creamos una variable que será de tipo updatePersonaI para poder almacenar los datos traidos con la consulta. Para esto, además necesitamos un formGroup.
  datosPersona!:updatePersonaI;

  passwordPersona!:updatePersonaI;

  //Creamos el FormGroup que nos sirve para poder tener el formulario con los campos correctos y en caso de necesitar validators.
  editarForm = new FormGroup({
    idPersona: new FormControl(''),
    token: new FormControl(''),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    documento: new FormControl(''),
    fechaNacimiento: new FormControl('')
  });


  passwordForm = new FormGroup({
    idPersona: new FormControl(''),
    token: new FormControl(''),
    oldPassword: new FormControl(''),
    newPassword: new FormControl('')
  })

  ngOnInit(): void {

    let idPersona = localStorage.getItem('id');
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

      //Imprimimos el formulario por consola.
      // console.log(this.editarForm.value);

    });

  }

  //Método que se ejecuta cuando se hace submit de formulario para enviar los datos editados.
  postForm(form:updatePersonaI){

    //Creamos log para verificar que la información está cambiando cuando presinamos el botón.
    // console.log(form);

    //llamamos el método de actualizar desde el servicio.
    this.updateServiceService.putPerson(form).subscribe((data:any) =>{
      console.log(data);
      //Recargamos página.
      window.location.reload();
    });

  }

  changePassword(form:any){

    //Retomamos el id
    let idPersona = localStorage.getItem('id');

    //Retomamos el token
    let token = localStorage.getItem('token');

    //llamamos nuestro formulario de actualizar password para empezar a asignarle la información de los campos.
    this.passwordForm.setValue({
      'idPersona' : idPersona,
      'token' : token,
      'oldPassword' : form.oldPassword,
      'newPassword' : form.newPassword
    })

    console.log(this.passwordForm);


    this.updateServiceService.putPassword(this.passwordForm).subscribe((data:any) =>{
      console.log(data);

      //regargamos página.
      window.location.reload();

    })
  }

  //Creamos método para pedir el token.
  getToken(){
    //Pedimos que del almacenamiento local nos pase la variable token.
    return localStorage.getItem('token');
  }

  PasswordRecovery(){
    this.router.navigate(['/loginRegister/forgot-password']);
  }

}
