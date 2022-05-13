import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/global-constants';
import { HttpClient } from '@angular/common/http/http';
import { RequestGroups } from './request-groups';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestGroupsService {

  port = GlobalConstants.port;
  
  API:string='http://localhost'+this.port+'/API-Eventually-SENA/';

  constructor(private http:HttpClient) { }

  getPromotedGroups(page:number):Observable<RequestGroups[]>{
    let direccion = this.API + "requestGroups?user=" + page;

    return this.http.get<RequestGroups[]>(direccion);
  }

  getDetailsGroup(id:number):Observable<RequestGroups>{
    let direccion = this.API + "requestGroups?id=" + id;
    return this.http.get<RequestGroups>(direccion);
  }
}
