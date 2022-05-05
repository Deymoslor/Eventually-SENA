import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { updatePersonaI } from '../updatePersonaI';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';
import { updatePasswordPersonaI } from '../updatePasswrodPersonaI';
import { GlobalConstants } from 'src/app/global-constants';
import { AuthService } from 'src/app/core/service/auth.service';
import { LikesI, LikesPerson } from 'src/app/models/likes';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  public port = GlobalConstants.port;

  //Definimos ruta raíz de el API.
  API:string='http://localhost'+this.port+'/Api-Eventually-SENA/';

  constructor(
    //Inyectamos el HttpClient.
    private http:HttpClient,

    private authService:AuthService,
  ) { }

  //Creamos método para obtener la persona. Este método devuelve un observable de tipo PersonaI
  getSinglePerson(id:any):Observable<updatePersonaI>{
    let direccion = this.API+"persons?id=" + id;
    // console.log(direccion);

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

  getAllLikes (idPerson:number):Observable<LikesI[]>{
    let dir=this.API + "likesProfile?idPersona=" + idPerson;
    return this.http.get<LikesI[]>(dir);
  }

  getPersonLikes(id:number):Observable<LikesPerson[]>{
    let dir=this.API + "likesProfile?id=" + id;
    return this.http.get<LikesPerson[]>(dir);
  }

  getLikeId(likeName:string):Observable<any[]>{
    let dir=this.API + "likesProfile?likeName=" + likeName;
    return this.http.get<any[]>(dir);
  }

  // deleteLikePerson(idGusto:any,idPersona:any):Observable<any[]>{
  deleteLikePerson(form:any):Observable<ResponseI[]>{
    let dir=this.API + "likesProfile";
    // let Options = {
    //   headers: new HttpHeaders({
    //     'Content-type': 'application/json'
    //   }),
    //   body:idGusto,idPersona
    // }
    return this.http.post<ResponseI[]>(dir,form);
  }

  // deleteLikePerson(idGusto:any,idPersona:any):Observable<any[]>{
  createLikePerson(form:any):Observable<ResponseI[]>{
    let dir=this.API + "likesProfile";
    // let Options = {
    //   headers: new HttpHeaders({
    //     'Content-type': 'application/json'
    //   }),
    //   body:idGusto,idPersona
    // }
    return this.http.post<ResponseI[]>(dir,form);
  }

}