import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.scss']
})
export class LoginnComponent implements OnInit {

  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });

  formularioDeUsuarios:FormGroup;

  constructor(
    public servicio:ServiceService,
    public formulario:FormBuilder
    ) {

    //Retomamos la información de el formulario.
    this.formularioDeUsuarios = this.formulario.group({
      email:[''],
      password:['']
    })

   }

  ngOnInit(): void {
  }

  loginIn():any{
    console.log("Me presionaste ");
    console.log(this.formularioDeUsuarios.value);

    this.servicio.Login(this.formularioDeUsuarios.value).subscribe(respuesta=>{

      console.log('Se está ejecutando');
      console.log(this.formularioDeUsuarios.value);


    });

  }

}
