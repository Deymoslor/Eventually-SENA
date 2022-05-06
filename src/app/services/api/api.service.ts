import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EventI } from 'src/app/models/event.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { ListEventsI } from '../../models/listEvents.interface';

import { HttpClient } from '@angular/common/http';
import { LikesI } from 'src/app/models/likes';
import { ResultServiceI } from '../../models/result-service.interface';
import { GlobalConstants } from 'src/app/global-constants';
import { DetailGroupPesonI } from 'src/app/models/detail-group-peson.interface';
import { ParticipantsEventsI } from '../../models/participants-events.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  port = GlobalConstants.port;

  url:string = "http://localhost"+this.port+"/Api-Eventually-SENA/";

  constructor(private http:HttpClient) { }

  postEvent(form:EventI,idPerson: number, idGrupoP: number):Observable<ResponseI>{
    let dir = this.url+"eventos?idPersonaP=" + idPerson + "&idGrupoP=" + idGrupoP;
    return this.http.post<ResponseI>(dir, form);
  }

  postLike(form:LikesI):Observable<ResponseI>{
    let dir = this.url+"likes";

    return this.http.post<ResponseI>(dir, form);
  }

  getAllEvents(page:number):Observable<ListEventsI[]>{
    let dir = this.url + "eventos?page=" + page;
    return this.http.get<ListEventsI[]>(dir);
  }

  getSingleEvent(id: string | number | null):Observable<EventI>{
    let dir = this.url + "eventos?id=" + id;
    return this.http.get<EventI>(dir);
  }

  getSigleEventGroup(id:number):Observable<EventI>{
    let dir = this.url + "eventos?idGroup=" + id;
    return this.http.get<EventI>(dir);
  }

  putEvent(form:EventI):Observable<ResponseI>{
    let dir = this.url + "eventos";
    return this.http.put<ResponseI>(dir, form);
  }

  putFinishEvent(idEvent:EventI):Observable<ResponseI>{
    let dir = this.url + "eventos";
    return this.http.put<ResponseI>(dir, idEvent);
  }

  //Result of the service
  postResultEvent(form: ResultServiceI):Observable<ResponseI>{
    let dir = this.url + "eventos?result";
    return this.http.post<ResponseI>(dir, form);
  }

  //INFO person event group.
  getStatePersonGroup(idEvento: number, idGrupo: number):Observable<DetailGroupPesonI>{
    let dir = this.url + "eventos?idPerson=" + idEvento + "&idGrupo=" + idGrupo
    return this.http.get<DetailGroupPesonI>(dir);
  }

  //INFO person Event
  getPersonExistEvent(idPerson: number, idEvent: number):Observable<ParticipantsEventsI>{
    let dir = this.url + "eventos?idPersonE=" + idPerson + "&idEventE=" + idEvent
    return this.http.get<ParticipantsEventsI>(dir);
  }

}
