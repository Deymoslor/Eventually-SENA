import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../see-groups/group';
import { Groups } from '../see-groups/groups';
import { GlobalConstants } from 'src/app/global-constants';

@Injectable({
  providedIn: 'root'
})
export class RelatedGroupsService {

  port = GlobalConstants.port;
  
  API:string='http://localhost'+this.port+'/API-Eventually-SENA/';
  // readonly groups: Groups[] = [
  //   {
  //     idGrupos: 1,
  //     nombreGrupo: 'Maquillaje',
  //     descripcionGrupo: 'Auriculares',
  //     invitadosTotales: 50,
  //   },
  //   {
  //     idGrupos: 2,
  //     nombreGrupo: 'Solo Redes',
  //     descripcionGrupo: 'Auriculares',
  //     invitadosTotales: 50,
  //   },
  // ];

  constructor(private http:HttpClient) { }

  getRelatedGroups(user:number):Observable<Groups[]>{
    let direccion = this.API + "relatedGroups?user=" + user;

    return this.http.get<Groups[]>(direccion);
  }

  getDetailsRelatedGroup(id:number):Observable<Group>{
    let direccion = this.API + "relatedGroups?id=" + id;
    return this.http.get<Group>(direccion);
  }
}
