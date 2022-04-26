import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { updatePersonaI } from '../updatePersonaI';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';
import { updatePasswordPersonaI } from '../updatePasswrodPersonaI';
import { GlobalConstants } from 'src/app/global-constants';
import { AuthService } from 'src/app/core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  public port = GlobalConstants.port;

  //Definimos ruta raíz de el API.
  API:string='http://localhost:'+this.port+'/Api-Eventually-SENA/';

  constructor(
    //Inyectamos el HttpClient.
    private http:HttpClient,

    private authService:AuthService,
  ) { }

  //Creamos método para obtener la persona. Este método devuelve un observable de tipo PersonaI
  getSinglePerson(id:any):Observable<updatePersonaI>{
    let idD = this.authService.desencriptar(id);
    let direccion = this.API+"persons?id=" + idD;
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
