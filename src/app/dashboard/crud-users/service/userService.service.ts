import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPersonasI } from '../ListaPersonasI.interface';
import { PersonaI } from '../modal-users/persona.interface';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';

@Injectable({
  providedIn: 'root'
})
export class userService {
  //Definimos ruta raíz de el API.
  API:string='http://localhost/API_rest_Eventually/';

  //Definimos dentro del constructor el cliente http.
  constructor(

    //Inyectamos el HttpClient.
    private http:HttpClient

  ) { }

  //Creamos método para obtener pacientes.
  getAllPersons(page:number):Observable<ListaPersonasI[]>{

  //Creamos una variable con la dirección de envío de información.
  let direccion = this.API + "persons?page=" + page;

  //Creamos el retorno de un método get que recibirá datos del tipo de la interfaz.
  return this.http.get<ListaPersonasI[]>(direccion);

  }

  //Creamos método para obtener la persona. Este método devuelve un observable de tipo PersonaI
  getSinglePerson(id:number):Observable<PersonaI>{
    let direccion = this.API+"persons?id=" + id;
    return this.http.get<PersonaI>(direccion);
  }

  //Creamos el método para actualizar.
  putPerson(form:PersonaI):Observable<ResponseI>{
    let direccion = this.API+"persons";
    return this.http.put<ResponseI>(direccion,form);
  }

}