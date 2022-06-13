import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { accountService } from '../service/accountService.service';
import { AlertasService } from '../../core/service/alertas.service';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  RecoveryForm: FormGroup;

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private accountService:accountService,
    private alertas:AlertasService,
  ) {

    //Creamos una variable que hará referencia a nuestro formulario de recuperación de contraseña, este a su vez recibe 2 parámetros, el primero que es un array de formControls y el segundo un valor por defecto.
    this.RecoveryForm = this.formBuilder.group({
      //Aquí asignamos un elemento, email a un formControl que recibe 2 parámetros, el valor por defecto del campo y las validaciones que queramos.
      email : ['',[Validators.required, Validators.email]],
    });

  }

  ngOnInit(): void {
  }

  //Creamos variable de recuperación de contraseña.
  sendRecoveryMail(form:any){
    console.log(form);
    //llamamos al servicio para ejecutar el método.
    this.accountService.postRecovery(form).subscribe(data =>{
      //Imprimomos lo que nos devuelve la función.
      // console.log(data);
      let respuesta:ResponseI = data;
      if(respuesta.status == 'ok'){
        this.alertas.showSuccess('Revisa tu correo electrónico incluido spam','Reestablecimiento de contraseña realizado');
        setTimeout(() =>{
          //redirecionamos a el login.
          this.router.navigate(['/settings/settings-account']);
        },5000)
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Error');
      }
    });

  }

  cancel():any{

    this.router.navigate(['/settings/settings-account']);

  }



}
