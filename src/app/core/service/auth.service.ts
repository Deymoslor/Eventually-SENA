import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ROLES_ENUM } from 'src/app/constants/roles.enum';
import { PersonaI } from 'src/app/dashboard/crud-users/modal-users/personaI.interface';
import { IRol } from '../ui/IRol.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public currentUser: BehaviorSubject<PersonaI>

  //Definimos ruta raíz de el API.
  API:string='http://localhost/Api-Eventually-SENA/';

  //Cosa.
  public currentUser!: BehaviorSubject<PersonaI>;
  public currentRol!: BehaviorSubject<IRol>
  public id!: any;
  public rol!: any;

  constructor(
    private http:HttpClient
  ) {
      //Retomamos id en constructor.
      this.id = localStorage.getItem('id');

      console.log(this.id)

      this.currentUser = new BehaviorSubject(
        JSON.parse(this.id)
      );

      //Retomamos id en constructor.
      this.rol = localStorage.getItem('rol');

      console.log(this.rol)

      // this.currentRol = new BehaviorSubject(
      //   JSON.parse(this.rol)
      // );

    }

    //Creamos un método que nos permita evaluar si una sesión está activa o no.
    get getUser():PersonaI{
      return this.currentUser.value;
    }

    // get getRol():IRol{
    //   return this.API
    // }

    //Creamos un método que permita saber si tiene acceso a un módulo.
    hasAccessToModule(roles: ROLES_ENUM[]){
      // return this.getUser && roles.includes(this.getUser.Roles_idRoles);
      return this.getUser && roles.includes(this.rol);
    }

  ngOnInit(): void {
    console.log(this.getUser.Roles_idRoles);
  }

}
