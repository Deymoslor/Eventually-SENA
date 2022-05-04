import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groups } from './groups';
import { Group } from './group';
import { updatePersonaI } from '../../settings/updatePersonaI';
import { GroupPerson } from './GroupPerson';

@Injectable({
  providedIn: 'root'
})
export class SeeGroupsService {
  API:string='http://localhost:8181/API-Eventually-SENA/';

  constructor(private http:HttpClient) { }

  getPromotedGroups(page:number):Observable<Groups[]>{
    let direccion = this.API + "Groups?user=" + page;

    return this.http.get<Groups[]>(direccion);
  }

  getDetailsGroup(id:number):Observable<Group>{
    let direccion = this.API + "Groups?id=" + id;
    return this.http.get<Group>(direccion);
  }

  postDetailsGroupPerson(GroupPersonC:GroupPerson):Observable<Response>{
    let direccion = this.API + "Groups";
    return this.http.post<Response>(direccion, GroupPersonC);
  }

  getSinglePerson(id:any):Observable<updatePersonaI>{
    let direccion = this.API+"persons?id=" + id;
    console.log(direccion);
    return this.http.get<updatePersonaI>(direccion);
  }
}