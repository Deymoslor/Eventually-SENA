import { Component, OnInit } from '@angular/core';
//Form groups import.
import { FormBuilder, FormGroup } from '@angular/forms';
//Accout Service import.
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formUsers:FormGroup;
  // formUsers!: FormGroup;

  // formUsers = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  constructor(
    public formulario:FormBuilder,
    private accoutsService:ServiceService,
    private router:Router
    ) {

    //Retomamos la información del formulario.
    this.formUsers = this.formulario.group({
      email:[''],
      password:['']
    })

    }

  ngOnInit(): void {
  }

  //Creamos método para enviar datos del furmulario a la API.
  sendData():any{
    console.log("Me presionaste");
    console.log(this.formUsers.value);

    //llamamos el método de insertar empleado haciendo uso de crudService
    this.accoutsService.addUser(this.formUsers.value).subscribe(respuesta=>{

      this.router.navigate(['/loginRegister']);

    });
  }

  cancel():any{
    this.router.navigate(['/loginRegister']);
  }

}
