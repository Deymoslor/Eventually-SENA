import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from '../models/response.interface';
import { TypeServicesI } from '../models/typeServices.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url:string="http://localhost/API_rest_Eventually/"

  constructor(
    private http:HttpClient
  ) { }

  getAllTypeServices(page:number):Observable<TypeServicesI[]>{
    let dir = this.url + "typeServices?page=" + page;
    return this.http.get<TypeServicesI[]>(dir);
  }

  postEvent(form:TypeServicesI):Observable<ResponseI>{
    let dir = this.url+"typeServices";
    return this.http.post<ResponseI>(dir, form);
  }

} 
