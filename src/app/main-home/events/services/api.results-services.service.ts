import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/global-constants';
import { ResultsServicesI } from '../models/results-services.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiResultsServicesService {

  port = GlobalConstants.port;

  url:string = "http://localhost"+this.port+"/Api-Eventually-SENA/"

  constructor(private http:HttpClient) { }

  getResultsServices(page:number):Observable<ResultsServicesI[]>{
    let dir = this.url + "resultsServices?idService=" + page;
    return this.http.get<ResultsServicesI[]>(dir);
  }

}
