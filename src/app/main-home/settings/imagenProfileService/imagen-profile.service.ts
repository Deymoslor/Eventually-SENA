import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { GlobalConstants } from 'src/app/global-constants';
import { updateImagenProfile } from '../../../menu/user-menu/updateImagenProfile.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagenProfileService {

  public port = GlobalConstants.port;

  //Definimos ruta raíz de el API.
  API:string='http://localhost'+this.port+'/Api-Eventually-SENA/';

  constructor(

    //Inyectamos el HttpClient.
    private http:HttpClient,

    private authService:AuthService,

  ) { }

  // //Creamos método para obtener la persona. Este método devuelve un observable de tipo PersonaI
  // getSinglePerson(id:any):Observable<updatePersonaI>{
  //   let direccion = this.API+"imagenProfile?id=" + id;
  //   // console.log(direccion);

  //   return this.http.get<updatePersonaI>(direccion);
  // }

  //Creamos el método para actualizar.
  putPerson(form:updateImagenProfile):Observable<ResponseI>{
    let direccion = this.API+"imagenProfile";
    return this.http.put<ResponseI>(direccion,form);
  }

}

