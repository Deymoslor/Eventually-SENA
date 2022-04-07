import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EventI } from 'src/app/models/event.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { ListEventsI } from '../../models/listEvents.interface';

import { HttpClient } from '@angular/common/http';
import { LikesI } from 'src/app/models/likes';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost/Api-Eventually-SENA/";

  constructor(private http:HttpClient) { }

  postEvent(form:EventI):Observable<ResponseI>{
    let dir = this.url+"eventos";

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

}
