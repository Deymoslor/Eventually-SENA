import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { globalAccountConstants } from 'src/app/constants/globalAccountConstants';
import { ROLES_ENUM } from 'src/app/constants/roles.enum';
import { PersonaI } from 'src/app/dashboard/crud-users/modal-users/personaI.interface';
import { IRol } from '../ui/IRol.interface';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public currentUser: BehaviorSubject<PersonaI>

  //Definimos ruta raíz de el API.
  API:string='http://localhost/Api-Eventually-SENA/';

  //Cosa.
  public currentUser: BehaviorSubject<PersonaI>;
  public currentRol: BehaviorSubject<ROLES_ENUM>
  public id!: any;
  public rol!: any;

  //Encriptación:
  public rolDesencriptado: any;
  public encPass = "$Eventually2021";

  public rolEncriptado: any;

  constructor(
    private http:HttpClient,
    // private globalAccountConstants:globalAccountConstants
  ) {
      //Retomamos id en constructor.
      this.id = localStorage.getItem('id');


      this.currentUser = new BehaviorSubject(
        this.id
      );

      //Retomamos id en constructor.
      this.rol = localStorage.getItem('nombreRol');

      this.currentRol = new BehaviorSubject(
        this.rol
      );
    }

    desencriptar(texto:any){

      this.rolDesencriptado = CryptoJS.AES.decrypt(texto.trim(), this.encPass.trim()).toString(CryptoJS.enc.Utf8);

      return this.rolDesencriptado;
    }

    encriptar(texto:any){

      this.rolEncriptado = CryptoJS.AES.encrypt(texto.trim(), this.encPass.trim()).toString();

      return this.rolEncriptado;
    }

    //Creamos un método que nos permita evaluar si una sesión está activa o no.
    get getUser():PersonaI{
      return this.currentUser.value;
    }

    get getRol():ROLES_ENUM{
      return this.currentRol.value;
    }

    //Creamos un método que permita saber si tiene acceso a un módulo.
    hasAccessToModule(roles: ROLES_ENUM[]){
      // return this.getUser && roles.includes(this.getUser.Roles_idRoles);
      return this.getUser && roles.includes(this.desencriptar(this.getRol));
    }

  ngOnInit(): void {

  }

}
