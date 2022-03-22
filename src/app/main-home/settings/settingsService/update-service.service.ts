import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { updatePersonaI } from '../updatePersonaI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  //Definimos ruta raíz de el API.
  API:string='http://localhost/API_rest_Eventually/';

  constructor(
    //Inyectamos el HttpClient.
    private http:HttpClient
  ) { }



  //Creamos método para obtener la persona. Este método devuelve un observable de tipo PersonaI
  getSinglePerson(id:any):Observable<updatePersonaI>{
    let direccion = this.API+"persons?id=" + id;
    console.log(direccion);

    return this.http.get<updatePersonaI>(direccion);
  }

}
