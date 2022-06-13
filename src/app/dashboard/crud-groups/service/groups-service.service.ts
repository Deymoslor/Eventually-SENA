import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListGroups } from "../listGroups.interface";
import { Group } from "../modal-edit-groups/group.interface";
import { GlobalConstants } from 'src/app/global-constants';
import { ResponseI } from 'src/app/core/ui/response.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {

  port = GlobalConstants.port;

  API:string='http://localhost'+this.port+'/Api-Eventually-SENA/';

  constructor(private http:HttpClient) { }

  postGroup(form:Group):Observable<ResponseI>{
    let direccion = this.API+"CRUDGroups";

    return this.http.post<ResponseI>(direccion, form);
  }

  getAllGroups(page:number):Observable<ListGroups[]>{
    let direccion = this.API + "CRUDGroups?page=" + page;

    return this.http.get<ListGroups[]>(direccion)
  }

  getSingleGroup(id:number):Observable<Group>{
    let direccion = this.API + "CRUDGroups?id=" + id;
    return this.http.get<Group>(direccion);
  }

  putGroup(form:Group):Observable<ResponseI>{
    let direccion = this.API + "CRUDGroups";
    return this.http.put<ResponseI>(direccion, form);
  }
}
