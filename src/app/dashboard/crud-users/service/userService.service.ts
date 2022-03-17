import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPersonasI } from '../ListaPersonasI.interface';


@Injectable({
  providedIn: 'root'
})
export class userService {

  //Definimos ruta raíz de el API.
  API:string='http://localhost/API_rest_Eventually/';

  //Definimos dentro del constructor el cliente http.
  constructor(
    private http:HttpClient
  ) { }

  //Creamos método para obtener pacientes.
  getAllPersons(page:number):Observable<ListaPersonasI[]>{

    //Creamos una variable con la dirección de envío de información.
    let direccion = this.API + "persons?page=" + page;

    //Creamos el retorno de un método get que recibirá datos del tipo de la interfaz.
    return this.http.get<ListaPersonasI[]>(direccion);
  }


}
