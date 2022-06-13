import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/global-constants';
import { HttpClient } from '@angular/common/http';
import { RequestGroups } from './request-groups';
import { Observable } from 'rxjs';
import { GroupPersonDetails } from '../../groups/your-groups/your-groups-details/group-person-details';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';

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

  getRequestGuests(idGrupo:number,idPersona:number):Observable<GroupPersonDetails>{
    let direccion = this.API + "requestGroups?idGrupo=" + idGrupo+"&idPersona="+idPersona;

    return this.http.get<GroupPersonDetails>(direccion);
  }

  getDetailsGroup(id:number):Observable<RequestGroups>{
    let direccion = this.API + "requestGroups?id=" + id;
    return this.http.get<RequestGroups>(direccion);
  }

  putDetailsPersonGroup(form:newDetail):Observable<ResponseI>{
    let direccion = this.API + "requestGroups"
    return this.http.put<ResponseI>(direccion, form);
  }

}
