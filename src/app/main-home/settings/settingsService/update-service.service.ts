import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { updatePersonaI } from '../updatePersonaI';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  //Definimos ruta raíz de el API.
  API:string='http://localhost/Api-Eventually-SENA/';

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

  //Creamos el método para actualizar.
  putPerson(form:updatePersonaI):Observable<ResponseI>{
    let direccion = this.API+"personsUser";
    return this.http.put<ResponseI>(direccion,form);
  }

}