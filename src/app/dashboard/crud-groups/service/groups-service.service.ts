import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListGroups } from "../listGroups.interface";
import { Group } from "../modal-edit-groups/group.interface";

@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {
  API:string='http://localhost/API_rest_Eventually/';

  constructor(private http:HttpClient) { }

  postGroup(form:Group):Observable<Response>{
    let direccion = this.API+"CRUDGroups";

    return this.http.post<Response>(direccion, form);
  }

  getAllGroups(page:number):Observable<ListGroups[]>{
    let direccion = this.API + "CRUDGroups?page=" + page;

    return this.http.get<ListGroups[]>(direccion)
  }

  getSingleGroup(id:number):Observable<Group>{
    let direccion = this.API + "CRUDGroups?id=" + id;
    return this.http.get<Group>(direccion);
  }

  putGroup(form:Group):Observable<Response>{
    let direccion = this.API + "CRUDGroups";
    return this.http.put<Response>(direccion, form);
  }
}
