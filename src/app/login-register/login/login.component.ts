import { Component, Input, OnInit } from '@angular/core';
import { accountService } from '../service/accountService.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginI } from './models/login.interface';
import { ResponseI } from './models/response.intarface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Input para los datos que queremos enviar.
  @Input() dataInput:any;

  //Mensaje del padre
  // parentMessageL!: string;

  //Creamos el modelo de nuestro formulario login.
  // formUsers!:FormGroup;
  // formUsers = new FormGroup({
  //   email: new FormControl("")
  // });

  //Creamos variable para mostrar o no el mensaje de error en caso de login.
  errorStatus:boolean = false;
  errorMsg:any = "";

  //Creamos una variable que hará referencia a nuestro formulario de login, este a su vez recibe 2 parámetros, el primero que es un array de formControls.
  loginForm = new FormGroup({
    //Aquí asignamos un elemento, email y password a un formControl que recibe 2 parámetros, el valor por defecto del campo y las validaciones que queramos.
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  constructor(
    //Inyectamos el servicio.
    private accountService:accountService,

    private formulario:FormBuilder,

    //Inyectamos el reuter.
    private router:Router
    ) {
        // //Retomamos la información del formulario.
        // this.formUsers = this.formulario.group({
        //   email:['']
        //   // password:['']
        // })
      }

  ngOnInit(): void {

    //Llamamos método para revisar el local storage.
    // this.checkLocalStorage();

    // this.parentMessageL = "Test";
    // console.log(this.parentMessageL);

  }

  //Creamos un método que nos ayudará a evaluar si el token existe para determinar si la sesión está abierta o no.
  // checkLocalStorage(){
  //   //Evaluamos si en el almacenamiento local está el item token.
  //   if(localStorage.getItem('token')){
  //     //Si existe nos redirige al apartado de grupos.
  //     return this.router.navigate(['/groups']);
  //   }else{
  //     //De lo contrario nos devuelve un 1.
  //     return 1;
  //   }
  // }

  //Método que se ejecuta al hacer submit al formulario.
  onLogin(form:loginI){

    //Conectamos al servicio y llamamos el método loginByEmail pasandole por parámetro el formulario, luego lo subscribimos y creamos el arrow function con data.
    this.accountService.loginByEmail(form).subscribe(data=>{
      //Imprimimos por consola la respuesta que nos está trayendo el API.
      // console.log(data);

      //Creamos una variable a la que llevarle data.
      let dataResponse:ResponseI = data;

      //Ahora creamos un if que nos permita acceder al status y comprobar si es correcto.
      if(dataResponse.status == "ok"){

        //En caso de que la respuesta esté como ok, lo que hacemos es almacenar el id en el almacenamiento local para sacarlo en los diferentes métodos que lo necesitemos (En este caso para el user-settings.component).
        localStorage.setItem("id",dataResponse.result.idPersona);

        //Almacenamos el token en el almacenamiento intero con localStorage.setItem que recibe por parámetro el nombre y el valor.
        localStorage.setItem("token",dataResponse.result.token);

        //Almacenamos el rol en el almacenamiento intero con localStorage.setItem que recibe por parámetro el nombre y el valor.
        localStorage.setItem("nombreRol",dataResponse.result.rol);

        this.router.navigate(['/groups']);
        this.router.navigateByUrl("/groups");
      }else{
        this.errorStatus = true;
        this.errorMsg = dataResponse.result.error_msg;
      }
    });

    //Probamos si el formulario está tomando la información.
    // console.log(form);
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

  register():any{

    this.router.navigate(['/loginRegister/register']);

  }

}
