import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/models/response.interface';
import { ListaProveedoresI } from '../ListaProveedoresI.interface';
import { ProveedorI } from '../modal-suppliers-create/ProveedorI.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  //Definimos ruta raíz de el API.
  API:string='http://localhost/API-Eventually-Sena/';

  //Definimos dentro del constructor el cliente http.
  constructor(

    //Inyectamos el HttpClient.
    private http:HttpClient

  ) { }

  //Creamos método para obtener pacientes.
  getAllSuppliers(page:number):Observable<ListaProveedoresI[]>{

  //Creamos una variable con la dirección de envío de información.
  let direccion = this.API + "suppliers?page=" + page;

  //Creamos el retorno de un método get que recibirá datos del tipo de la interfaz.
  return this.http.get<ListaProveedoresI[]>(direccion);

  }

  //Creamos método para obtener la persona. Este método devuelve un observable de tipo PersonaI
  getSingleSupplier(id:number):Observable<ProveedorI>{
    let direccion = this.API+"suppliers?id=" + id;
    return this.http.get<ProveedorI>(direccion);
  }

  //Creamos el método para actualizar.
  putSupplier(form:any):Observable<ResponseI>{
    let direccion = this.API+"suppliers";

    return this.http.put<ResponseI>(direccion,form);
  }

  postSupplier(form:any):Observable<ResponseI>{
    let direccion = this.API+"suppliers";

    return this.http.post<ResponseI>(direccion,form);
  }

}
