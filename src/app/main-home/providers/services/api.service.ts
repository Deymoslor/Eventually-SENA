import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeServicesI } from 'src/app/dashboard/crud-services/models/typeServices.interface';
import { ResponseI } from '../models/response.interface';
import { ServiceI } from '../models/service.interface';
import { ServiceEventI } from '../models/serviceEvent.interface';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url:string="http://localhost/Api-Eventually-SENA/"

  constructor(
    private http:HttpClient
  ) { }

  //TYPE SERVICES
  getAllTypeServices(page:number):Observable<TypeServicesI[]>{
    let dir = this.url + "typeServices?page=" + page;
    return this.http.get<TypeServicesI[]>(dir);
  }

  //Search if the provider had a service
  getSingleServiceProvider(idProv: string | number | null):Observable<ServiceI>{
    let dir = this.url + "providerService?idProv=" + idProv;
    return this.http.get<ServiceI>(dir);
  }

  postServiceProv(form:ServiceI):Observable<ResponseI>{
    let dir = this.url+"providerService";
    return this.http.post<ResponseI>(dir, form);
  }

  getAllServices(page:number):Observable<ServiceI[]>{
    let dir = this.url + "services?page=" + page;
    return this.http.get<ServiceI[]>(dir);
  }

  getSingleServiceProv(id: string | number | null):Observable<ServiceI>{
    let dir = this.url + "services?id=" + id;
    return this.http.get<ServiceI>(dir);
  }

  putService(form:ServiceI):Observable<ResponseI>{
    let dir = this.url + "services";
    return this.http.put<ResponseI>(dir, form);
  }

  //Event to service
  getAllServiceEventProv(page: number):Observable<ServiceEventI[]>{
    let dir = this.url + "providerService?pageSer=" + page;
    return this.http.get<ServiceEventI[]>(dir);
  }

  putServiceEventProv(form:ServiceEventI):Observable<ResponseI>{
    let dir = this.url + "serviceProvEv";
    return this.http.put<ResponseI>(dir, form);
  }


  
  

} 
