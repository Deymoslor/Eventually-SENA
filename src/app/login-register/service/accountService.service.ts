import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { loginI } from '../login/models/login.interface';
import { ResponseI } from '../login/models/response.intarface';
import { registerI } from '../register/register.interface';
import { supplierRequestI } from '../supplier-request/supplierRequestI.interface';
import { GlobalConstants } from 'src/app/global-constants';

@Injectable({
  providedIn: 'root'
})
export class accountService {

  port = GlobalConstants.port;

  //Definimos ruta raíz de el API.
  API:string='http://localhost:8181/Api-Eventually-SENA/';

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
    let direccion = this.API + "personsRegister";
    return this.http.post<ResponseI>(direccion,form);
  }

  postRecovery(form:any):Observable<ResponseI>{
    let direccion = this.API + "mailRecovery";
    return this.http.post<ResponseI>(direccion,form);
  }

  postMail(form:supplierRequestI):Observable<ResponseI>{
    let direccion = this.API + "mail";
    return this.http.post<ResponseI>(direccion,form);
  }

}
