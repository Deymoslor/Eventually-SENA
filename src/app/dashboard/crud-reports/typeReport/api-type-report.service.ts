import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/global-constants';
import { Groups } from 'src/app/main-home/groups/see-groups/groups';
import { ListEventsI } from 'src/app/models/listEvents.interface';
import { ListGroups } from '../../crud-groups/listGroups.interface';
import { ListaPersonasI } from '../../crud-users/ListaPersonasI.interface';
import { AllInvites } from './group-report/modals/all-invites';

@Injectable({
  providedIn: 'root'
})
export class ApiTypeReportService {

  port = GlobalConstants.port;

  API:string='http://localhost'+this.port+'/Api-Eventually-SENA/';

  constructor(private http:HttpClient) { }
  //Aquí optendremos todas las graficas de grupos
  //se espera que por lo menos sean 5 graficas

  // la primera grafica trata de los invitados totales de los grupos con mayor
  // numero de invitados
  getAllMajorInvite(page:number):Observable<AllInvites[]>{
    let direccion = this.API + "reportGroups?pageMajor=" + page;
    return this.http.get<AllInvites[]>(direccion);
  }
  // la segunda grafica trata de todos los invitados totales de cada grupo
  getAllInvite(page:number):Observable<AllInvites[]>{
    let direccion = this.API + "reportGroups?page=" + page;
    return this.http.get<AllInvites[]>(direccion);
  }
  // La tercera grafica trata te todos los grupos con mas eventos realizados
  getMajorEventsGroup(eventos:number):Observable<AllInvites[]>{
    let direccion = this.API + "reportGroups?eventos=" + eventos;
    return this.http.get<AllInvites[]>(direccion);
  }
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
