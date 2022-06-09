import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/global-constants';
import { HttpClient } from '@angular/common/http';
import { RequestGroups } from './request-groups';
import { Observable } from 'rxjs';

export interface newDetail {idGrupos: Number, idDetalleGrupoPersonas: Number, idPersona: Number, estadoPersona_idEstadoPersona: Number}
@Injectable({
  providedIn: 'root'
})

export class RequestGroupsService {

  port = GlobalConstants.port;

  API:string='http://localhost'+this.port+'/Api-Eventually-SENA/';

  constructor(private http:HttpClient) { }

  getRequestGroups(page:number):Observable<RequestGroups[]>{
    let direccion = this.API + "requestGroups?user=" + page;

    return this.http.get<RequestGroups[]>(direccion);
  }

  getRequestGuests(guests:number, idGrupo:number):Observable<RequestGroups[]>{
    let direccion = this.API + "requestGroups?guests=" + guests + "idGrupo=" + idGrupo;

    return this.http.get<RequestGroups[]>(direccion);
  }

  getDetailsGroup(id:number):Observable<RequestGroups>{
    let direccion = this.API + "requestGroups?id=" + id;
    return this.http.get<RequestGroups>(direccion);
  }

  putDetailsPersonGroup(form:newDetail):Observable<Response>{
    let direccion = this.API + "requestGroups"
    return this.http.put<Response>(direccion, form);
  }

}
