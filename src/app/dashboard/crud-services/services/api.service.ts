import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from '../models/response.interface';
import { TypeServicesI } from '../models/typeServices.interface';
import { ServiceI } from '../models/services.interface';
import { GlobalConstants } from 'src/app/global-constants';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  port = GlobalConstants.port;
  
  url:string="http://localhost"+this.port+"/Api-Eventually-SENA/"

  constructor(
    private http:HttpClient
  ) { }

  //TYPE SERVICES
  getAllTypeServices(page:number):Observable<TypeServicesI[]>{
    let dir = this.url + "typeServices?page=" + page;
    return this.http.get<TypeServicesI[]>(dir);
  }

  postEvent(form:TypeServicesI):Observable<ResponseI>{
    let dir = this.url+"typeServices";
    return this.http.post<ResponseI>(dir, form);
  }

  getSingleTypeService(id: string | number | null):Observable<TypeServicesI>{
    let dir = this.url + "typeServices?id=" + id;
    return this.http.get<TypeServicesI>(dir);
  }

  putTypeService(form:TypeServicesI):Observable<ResponseI>{
    let dir = this.url + "typeServices";
    return this.http.put<ResponseI>(dir, form);
  }

  //SERVICES

  getAllServices(page:number):Observable<ServiceI[]>{
    let dir = this.url + "services?page=" + page;
    return this.http.get<ServiceI[]>(dir);
  }

  getSingleService(id: string | number | null):Observable<ServiceI>{
    let dir = this.url + "services?id=" + id;
    return this.http.get<ServiceI>(dir);
  }

  putService(form:ServiceI):Observable<ResponseI>{
    let dir = this.url + "services";
    return this.http.put<ResponseI>(dir, form);
  }

} 
