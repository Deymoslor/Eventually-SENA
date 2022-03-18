import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { loginI } from '../login/models/login.interface';
import { ResponseI } from '../login/models/response.intarface';
import { User } from '../loginn/user';
import { registerI } from '../register/register.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //Definimos ruta raíz de el API.
  API:string='http://localhost/API_rest_Eventually/';

  //Definimos dentro del constructor el cliente http.
  constructor(private http:HttpClient) { }

  //Definimos una función para hacer login que recibe por parámetro un formulario de tipo loginI. Además definimos con : que tipo de respuesta va a brindar en este caso un obsercable de tipo ResponseI
  loginByEmail(form:loginI):Observable<ResponseI>{

    //Creamos una variable con la dirección de donde vamos a postear el formulario.
    let direccion = this.API + "auth";
    //Retornamos mediante el http y un método post la dirección y el formulario que retornará un ResponseI.
    return this.http.post<ResponseI>(direccion,form);
  }

  postUser(form:registerI):Observable<ResponseI>{
    let direccion = this.API + "persons";
    return this.http.post<ResponseI>(direccion,form);
  }

  //Creamos método que nos permite agregar empleados.
  addUser(userData: any):Observable<any>{

    // Retornamos los datos del empleado concatenando la instrucción de la api,
    // la dirección de la API, el método por el que estamos enviando la información
    // y la variable que nos permite la manipulación entre el archivo y la API.
    return this.http.post(this.API+"?insertar=1",userData);
  }

  Login(datosUser:User):Observable<any>{

    return this.http.post(this.API+"?login=1",datosUser);

  }

  login(user:loginI): Observable<any> {
    console.log(user);

    // return this.clienteHttp.get(this.API+"?login="+"%27"+user+"%27");
    return this.http.get("http://localhost/empleados/?login="+"%27"+user+"%27");
    // return this.clienteHttp.get(`http://localhost/empleados/?login=%27${user}%27`);
    // return this.clienteHttp.get("http://localhost/empleados/?consultar="+66);
    // return this.clienteHttp.get("http://localhost/empleados/?login=%27jordan@gmail.com%27")
    // return this.http.get(this.API+"?consultar="+user);
  }

}
