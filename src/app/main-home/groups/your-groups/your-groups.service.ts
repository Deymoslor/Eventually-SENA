import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../see-groups/group';
import { Groups } from '../see-groups/groups';
import { GlobalConstants } from 'src/app/global-constants';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';

@Injectable({
  providedIn: 'root'
})
export class YourGroupsService {

  port = GlobalConstants.port;

  API:string='http://localhost'+this.port+'/Api-Eventually-SENA/';

  constructor(private http:HttpClient) { }

  getYourGroups(user:number):Observable<Groups[]>{
    let direccion = this.API + "YourGroups?user=" + user;

    return this.http.get<Groups[]>(direccion);
  }

  getDetailsYourGroup(id:number):Observable<Group>{
    let direccion = this.API + "YourGroups?id=" + id;
    return this.http.get<Group>(direccion);
  }

  postYourGroup(form:Group):Observable<ResponseI>{
    let direccion = this.API+"YourGroups";

    return this.http.post<ResponseI>(direccion, form);
  }

  putGroup(form:Group):Observable<ResponseI>{
    let direccion = this.API + "YourGroups";
    return this.http.put<ResponseI>(direccion, form);
  }
}
