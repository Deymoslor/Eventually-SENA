import { Component, OnInit } from '@angular/core';
//Form groups import.
import { FormGroup, FormControl, Validators } from '@angular/forms';
//Accout Service import.
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { registerI } from './register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  nuevoForm = new FormGroup({
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    documento: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    Email: new FormControl(''),
    password: new FormControl(''),
    Celular: new FormControl(''),
    ciudad: new FormControl(''),
  });

  constructor(
    private service:ServiceService,
    private router:Router
    ) {}

  ngOnInit(): void {
  }

  //Creamos método para enviar datos del furmulario a la API.
  sendData():any{
    console.log("Me presionaste");

  }

  cancel():any{
    this.router.navigate(['/loginRegister']);
  }

  postForm(form:registerI){
    //Log para revisar los datos del formulario.
    // console.log(form);
    this.service.postUser(form).subscribe(data =>{
      console.log(data);

    });
  }

}
