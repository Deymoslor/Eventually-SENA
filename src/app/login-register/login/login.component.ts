import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Creamos el modelo de nuestro formulario login.
  // formUsers!:FormGroup;
  formUsers = new FormGroup({
    email: new FormControl("")
  });

  constructor(
    private accountService:ServiceService,
    private formulario:FormBuilder
    ) {

        // //Retomamos la información del formulario.
        // this.formUsers = this.formulario.group({
        //   email:['']
        //   // password:['']
        // })



      }

  ngOnInit(): void {
  }

  //Método para loggear al usuario.
  // login(){
  //   const user = this.formUsers.value;
  //   // const user = 66;
  //   // const user = {email: this.formUsers.value};

  //   console.log(user);

  //   this.accountService.login(user).subscribe(data=>{
  //     // this.userService.setToken(data.token);
  //     // this.router.navigateByUrl('/home');
  //     console.log(data);
  //     // console.log(data.token);
  //   });

  // }

}
