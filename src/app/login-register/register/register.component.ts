import { Component, OnInit } from '@angular/core';
//Form groups import.
import { FormGroup, FormControl, Validators, FormBuilder, MaxLengthValidator } from '@angular/forms';
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

  public lawValidator: boolean = false;

  nuevoForm: FormGroup;

  constructor(
    private service:accountService,
    private router:Router,
    private formBuilder:FormBuilder,
    ) {

      // this.nuevoForm = this.formBuilder.group({
      //   nombre: ['', Validators.required],
      //   apellidos: new FormControl('', [Validators.required, ]),
      //   documento: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]),
      //   fechaNacimiento: new FormControl('',Validators.required),
      //   Email: new FormControl('',Validators.email),
      //   password: new FormControl('',Validators.required),
      //   Celular: new FormControl('',Validators.required),
      //   ciudad: new FormControl('',Validators.required),
      //   check1: new FormControl ('', Validators.requiredTrue),
      //   check2: new FormControl ('', Validators.requiredTrue),
      // })

      this.nuevoForm = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.pattern(/^[A-Za-z]\d*$/)]],
        apellidos: ['', [Validators.required, Validators.pattern(/^[A-Za-z]\d*$/)]],
        // documento: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
        documento: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern(/^[0-9]\d*$/)]],
        fechaNacimiento: ['',Validators.required],
        Email: ['',[Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
        Celular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
        ciudad: ['', [Validators.required, Validators.pattern(/^[A-Za-z]\d*$/)]],
        check1: ['', Validators.requiredTrue],
        check2: ['', Validators.requiredTrue],
      })

    }

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
    // console.log('fecha usuario: ' + dateU);


    let yearU = parseInt(dateU.substring(0,4));
    let monthU = parseInt(dateU.substring(5,7));
    // console.log('Año Usuario: ' + yearU);
    // console.log('Mes Usuario: ' + monthU);

    let date = new Date();
    let yearS = date.getFullYear();
    let monthS = date.getMonth();
    // console.log('Año sistema: ' + yearS);
    // console.log('Mes sistema: ' + monthS);

    if ((yearS - yearU) >= 14 && (monthS <= monthU)) {
      console.log('entrando aquí');
      // this.lawValidator = true;
      // lawValidatorFunc();
      if ((yearS - yearU) >= 14 && (yearS - yearU) <= 17) {
        this.lawValidator = true;
        console.log(this.lawValidator);
      }else{
        this.lawValidator = false;
        console.log(this.lawValidator);
      }

      if (this.lawValidator) {
        this.service.postUser(form).subscribe(data =>{
          // console.log(data);
          this.router.navigate(['/loginRegister']);
        });
      }
    }
    // window.location.reload();
  }

  // lawValidatorFunc(yearS:number,yearU:number,monthS:number,monthU:number){
  //   if ((yearS - yearU) >= 14 && (monthS <= monthU)) {
  //     this.lawValidator = true;
  //   }
  // }

}
