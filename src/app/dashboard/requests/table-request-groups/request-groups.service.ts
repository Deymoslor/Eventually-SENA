import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaRequestGroupsI } from './ListaRequestGroupsI.interface';
import { RequestGroupsI } from './requestsGroupsI.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { GlobalConstants } from 'src/app/global-constants';

@Injectable({
  providedIn: 'root'
})
export class RequestGroupsService {

  port = GlobalConstants.port;

  //Definimos ruta raíz de el API.
  API:string='http://localhost'+this.port+'/Api-Eventually-SENA/';

  //Definimos dentro del constructor el cliente http.
  constructor(

    //Inyectamos el HttpClient.
    private http:HttpClient

  ) { }

  //Creamos método para obtener pacientes.
  getAllRequests(page:number):Observable<ListaRequestGroupsI[]>{

  //Creamos una variable con la dirección de envío de información.
  let direccion = this.API + "requestsResponsesGroups?page=" + page;

  //Creamos el retorno de un método get que recibirá datos del tipo de la interfaz.
  return this.http.get<ListaRequestGroupsI[]>(direccion);

  }

  //Creamos método para obtener la persona. Este método devuelve un observable de tipo PersonaI
  getSingleRequest(id:number):Observable<RequestGroupsI>{
    let direccion = this.API+"requestsResponsesGroups?id=" + id;
    return this.http.get<RequestGroupsI>(direccion);
  }

  putRequest(form:any):Observable<ResponseI>{
    let direccion = this.API + "requestsResponsesGroups";
    return this.http.put<ResponseI>(direccion,form);
  }

}
