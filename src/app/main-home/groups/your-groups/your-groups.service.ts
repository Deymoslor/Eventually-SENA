import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../see-groups/group';
import { Groups } from '../see-groups/groups';

@Injectable({
  providedIn: 'root'
})
export class YourGroupsService {
  API:string='http://localhost/angularProyectos/Api-Eventually-SENA/';
  readonly groups: Groups[] = [
    {
      idGrupos: 1,
      nombreGrupo: 'Maquillaje',
      descripcionGrupo: 'Auriculares',
      invitadosTotales: 50,
    },
  ];

  constructor(private http:HttpClient) { }

  getYourGroups(page:number):Observable<Groups[]>{
    let direccion = this.API + "YourGroups?page=" + page;

    return this.http.get<Groups[]>(direccion);
  }

  getDetailsYourGroup(id:number):Observable<Group>{
    let direccion = this.API + "YourGroups?id=" + id;
    return this.http.get<Group>(direccion);
  }

  postYourGroup(form:Group):Observable<Response>{
    let direccion = this.API+"YourGroups";

    return this.http.post<Response>(direccion, form);
  }
}
