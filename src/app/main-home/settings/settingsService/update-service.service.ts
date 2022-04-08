import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { updatePersonaI } from '../updatePersonaI';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';
import { updatePasswordPersonaI } from '../updatePasswrodPersonaI';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  //Definimos ruta raíz de el API.
<<<<<<< HEAD
  API:string='http://localhost/Api-Eventually-SENA/';
=======
  API:string='http://localhost/API-Eventually-SENA/';
>>>>>>> b1ab6c2727b23adad15e3b51e2221d040c02eb15

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

  //Creamos el método para actualizar el password comprobando el antiguo.
  putPassword(form:updatePasswordPersonaI):Observable<ResponseI>{
    let direccion = this.API + "personsUser";
    return this.http.post<ResponseI>(direccion,form);
  }

}
