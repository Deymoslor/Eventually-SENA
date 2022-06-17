import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/global-constants';
import { Groups } from 'src/app/main-home/groups/see-groups/groups';
import { ListEventsI } from 'src/app/models/listEvents.interface';
import { ListGroups } from '../../crud-groups/listGroups.interface';
import { ListaPersonasI } from '../../crud-users/ListaPersonasI.interface';
import { AllEvents } from './event-report/modals/all-events';
import { CountI } from './event-report/modals/count';
import { AllInvites } from './group-report/modals/all-invites';
import { grupos } from './group-report/modals/public-private';
import { AllUsers } from './user-report/modals/all-users';

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
  // la cuarta grafica trata de los gustos mas solicitados por los grupos
  getMajorLikesGroup(page:number):Observable<AllInvites[]>{
    let direccion = this.API + "reportGroups?gustos=" + page;
    return this.http.get<AllInvites[]>(direccion);
  }
  // la quinta grafica trata tel total de todos los grupos publicos
  getPublicGroups(page:number):Observable<grupos>{
    let direccion = this.API + "reportGroups?privacidadPublica=" + page;
    return this.http.get<grupos>(direccion);
  }
  // la quinta grafica trata tel total de todos los grupos publicos
  getPrivateGroups(page:number):Observable<grupos>{
    let direccion = this.API + "reportGroups?privacidadPrivada=" + page;
    return this.http.get<grupos>(direccion);
  }
  // este contador traerà el numero total de grupos creados
  getCountGroups(page:number):Observable<grupos>{
    let direccion = this.API + "reportGroups?countGroups=" + page;
    return this.http.get<grupos>(direccion);
  }

  //Aquí optendremos todas las graficas de usuarios

  //la primera grafica trata de listar a los organizadores con mayor numero de grupos
  getMajorManagerGroups(page:number):Observable<AllUsers[]>{
    let direccion = this.API + "reportUsers?majorManagerGroups=" + page;
    return this.http.get<AllUsers[]>(direccion);
  }
  //la segunda grafica trata de listar a los invitados con mayor numero de grupos
  getMajorInviteGroups(page:number):Observable<AllUsers[]>{
    let direccion = this.API + "reportUsers?majorInviteGroups=" + page;
    return this.http.get<AllUsers[]>(direccion);
  }
  //la tercera grafica trata de listar a los usuarios con mayor numero de solicitaciones.
  getMajorRequesterGroups(page:number):Observable<AllUsers[]>{
    let direccion = this.API + "reportUsers?majorRequesterGroups=" + page;
    return this.http.get<AllUsers[]>(direccion);
  }
  //la cuarta grafica trata de listar a los usuarios con mayot numero de eventos realizados.
  getMajorManagerEvents(page:number):Observable<AllUsers[]>{
    let direccion = this.API + "reportUsers?majorManagerEvents=" + page;
    return this.http.get<AllUsers[]>(direccion);
  }
  //la quinta grafica trata de listar a los gustos mas solicitados por los usuarios.
  getMajorLikesUsers(page:number):Observable<AllEvents[]>{
    let direccion = this.API + "reportUsers?majorLikesUsers=" + page;
    return this.http.get<AllUsers[]>(direccion);
  }

  //Aquí optendremos todas las graficas de usuarios

  //la primera grafica optendrá los valores si es precensial o virtual
  getlistTypeEvent(page:number):Observable<AllUsers[]>{
    let direccion = this.API + "reportEvents?listTypeEvent=" + page;
    return this.http.get<AllUsers[]>(direccion);
  }
  getInvitedEvents(page:number):Observable<CountI>{
    let direccion = this.API + "reportEvents?InvitedEvents=" + page;
    return this.http.get<CountI>(direccion);
  }
  getAcceptedEvents(page:number):Observable<CountI>{
    let direccion = this.API + "reportEvents?Accepted=" + page;
    return this.http.get<CountI>(direccion);
  }
  getDeniedEvents(page:number):Observable<CountI>{
    let direccion = this.API + "reportEvents?DeniedEvents=" + page;
    return this.http.get<CountI>(direccion);
  }
  getFinishedEvents(page:number):Observable<CountI>{
    let direccion = this.API + "reportEvents?FinishedEvents=" + page;
    return this.http.get<CountI>(direccion);
  }
  getAllCountEvents(page:number):Observable<CountI>{
    let direccion = this.API + "reportEvents?AllEvents=" + page;
    return this.http.get<CountI>(direccion);
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
