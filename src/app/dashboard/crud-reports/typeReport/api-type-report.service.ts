import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groups } from 'src/app/main-home/groups/see-groups/groups';
import { ListEventsI } from 'src/app/models/listEvents.interface';
import { ListGroups } from '../../crud-groups/listGroups.interface';
import { ListaPersonasI } from '../../crud-users/ListaPersonasI.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiTypeReportService {

  API:string='http://localhost/Api-Eventually-SENA/';

  constructor(private http:HttpClient) { }

  getAllPersons(page:number):Observable<ListaPersonasI[]>{

    let direccion = this.API + "persons?page=" + page;

    return this.http.get<ListaPersonasI[]>(direccion);

    }

  getAllGroups(page:number):Observable<ListGroups[]>{

    let direccion = this.API + "CRUDGroups?page=" + page;

    return this.http.get<ListGroups[]>(direccion);

  }

  getAllEvents(page:number):Observable<ListEventsI[]>{

    let dir = this.API + "eventos?page=" + page;

    return this.http.get<ListEventsI[]>(dir);

  }
}
