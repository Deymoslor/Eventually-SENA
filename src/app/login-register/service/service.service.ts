import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../login/credentials';
import { User } from '../loginn/user';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //Definimos ruta raíz de el API.
  API: string='http://localhost/empleados/';

  constructor(private clienteHttp:HttpClient) { }

  //Creamos método que nos permite agregar empleados.
  addUser(userData: any):Observable<any>{

    // Retornamos los datos del empleado concatenando la instrucción de la api,
    // la dirección de la API, el método por el que estamos enviando la información
    // y la variable que nos permite la manipulación entre el archivo y la API.
    return this.clienteHttp.post(this.API+"?insertar=1",userData);
  }

  Login(datosUser:User):Observable<any>{

    return this.clienteHttp.post(this.API+"?login=1",datosUser);

  }

  login(user:Credentials): Observable<any> {
    console.log(user);

    // return this.clienteHttp.get(this.API+"?login="+"%27"+user+"%27");
    return this.clienteHttp.get("http://localhost/empleados/?login="+"%27"+user+"%27");
    // return this.clienteHttp.get(`http://localhost/empleados/?login=%27${user}%27`);
    // return this.clienteHttp.get("http://localhost/empleados/?consultar="+66);
    // return this.clienteHttp.get("http://localhost/empleados/?login=%27jordan@gmail.com%27")
    // return this.http.get(this.API+"?consultar="+user);
  }

}
