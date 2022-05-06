import { Component, OnInit } from '@angular/core';
//Form groups import.
import { FormGroup, FormControl, Validators } from '@angular/forms';
//Accout Service import.
import { accountService } from '../service/accountService.service';
import { Router } from '@angular/router';
import { registerI } from './register.interface';
import { parse } from 'cookie';

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
    private service:accountService,
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
    let dateU = form.fechaNacimiento;

    let yearU = parseInt(dateU.substring(0,4));
    let monthU = parseInt(dateU.substring(5,6));
    console.log('Año Usuario: ' + yearU);
    console.log('Mes usuario: ' + monthU);

    let date = new Date();
    let yearS = date.getFullYear();
    let monthS = date.getMonth();
    console.log('Año sistema: ' + yearS);
    console.log('Mes sistema: ' + monthS);
    
    
    let x = false;
    if ((yearS - yearU) > 18 && (monthS == monthU)) {
      console.log('Mayor de 18');
    }
    
    

    if (x) {
      this.service.postUser(form).subscribe(data =>{
        // console.log(data);
        this.router.navigate(['/loginRegister']);
      });
    }
  }

}
