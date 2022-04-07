import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../see-groups/group';
import { Groups } from '../see-groups/groups';

@Injectable({
  providedIn: 'root'
})
export class RelatedGroupsService {
  API:string='http://localhost/API-Eventually-SENA/';
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

  getRelatedGroups(page:number):Observable<Groups[]>{
    let direccion = this.API + "relatedGroups?page=" + page;

    return this.http.get<Groups[]>(direccion);
  }

  getDetailsRelatedGroup(id:number):Observable<Group>{
    let direccion = this.API + "relatedGroups?id=" + id;
    return this.http.get<Group>(direccion);
  }
}
