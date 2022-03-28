import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LikesI } from '../models/likes';
import { TypesLikesI } from '../models/typesLikes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string="http://localhost/angularProyectos/Api-Eventually-SENA/"

  constructor(
    private http:HttpClient
  ) { }

  getAllLikes (page:number):Observable<LikesI[]>{
    let dir=this.url + "likes?page=" + page;
    return this.http.get<LikesI[]>(dir);
  }

  getAllTypesLikes (page:number):Observable<TypesLikesI[]>{
    let dir=this.url + "typeLikes?page=" + page;
    return this.http.get<TypesLikesI[]>(dir);
  }


  getSingleLikes(id:number):Observable<LikesI>{
    let dir = this.url + "likes?id=" + id;
    return this.http.get<LikesI>(dir);
  }

  putLikes(form:LikesI):Observable<Response>{
    let dir = this.url + "likes";
    return this.http.put<Response>(dir,form);
  }
}
