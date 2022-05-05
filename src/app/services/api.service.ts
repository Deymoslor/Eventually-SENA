import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LikesI, LikesPerson } from '../models/likes';
import { EventI } from '../models/event.interface';
import { ResponseI } from '../models/response.interface';
import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public port = GlobalConstants.port;

  postLike(form:LikesI):Observable<ResponseI>{
    let dir = this.url+"likes";

    return this.http.post<ResponseI>(dir, form);
  }

  url:string="http://localhost"+this.port+"/Api-Eventually-SENA/"

  constructor(
    private http:HttpClient
  ) { }

  getAllLikes (page:number):Observable<LikesI[]>{
    let dir=this.url + "likes?page=" + page;
    return this.http.get<LikesI[]>(dir);
  }

  // getAllTypesLikes (page:number):Observable<TypesLikesI[]>{
  //   let dir=this.url + "typeLikes?page=" + page;
  //   return this.http.get<TypesLikesI[]>(dir);
  // }

  getSingleLikes(id:number):Observable<LikesI>{
    let dir = this.url + "likes?id=" + id;
    return this.http.get<LikesI>(dir);
  }

  putLikes(form:any):Observable<Response>{
    let dir = this.url + "likes";
    return this.http.put<Response>(dir,form);
  }

  // getStatusLikes(id:number):Observable<likesStatusI>{
  //   let dir = this.url + "likesStatus?id=" + id;
  //   return this.http.get<likesStatusI>(dir);
  // }

  // putLikeStatus(form:likesStatusI):Observable<Response>{
  //   let dir = this.url + "likeStatus";
  //   return this.http.put<Response>(dir,form);
  // }
}
