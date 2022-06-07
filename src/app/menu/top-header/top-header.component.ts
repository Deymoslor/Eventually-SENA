import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';
import { UpdateServiceService } from '../../main-home/settings/settingsService/update-service.service';
import { SupplierService } from '../../dashboard/crud-suppliers/service/supplier.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  public rol!:string;
  public nombrePerfil:any = undefined;

  constructor(
    private router: Router,
    private authService: AuthService,
    private updateService: UpdateServiceService,
    private supplierService: SupplierService
  ) { }

  ngOnInit(): void {

    //Desencriptamos el rol para saber si mostrar o no algunas cosas.
    this.rol = this.authService.desencriptar(localStorage.getItem('nombreRol'));

    //Condición para saber si viene vacío el nombre como invitado.
    if(this.rol != 'PROVEEDOR'){
      //Buscamos si es invitado para traer su nombre, en caso de venir vacío buscamos en proveedor.
      this.updateService.getSinglePerson(this.authService.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{
        let datosPersona = data[0];
        this.nombrePerfil = datosPersona.nombre;
      });
    }else{
      //Buscamos si es proveedor para traer su nombrem en caso de venir vacío buscamos en proveedor.
      this.supplierService.getSingleSupplier(this.authService.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{
        let datosProveedor = data[0];
        this.nombrePerfil = datosProveedor.nombreProveedor;
      });
    }

  }

  logOut(){
    localStorage.clear();
    this.router.navigate(["loginRegister/login"]);
    window.location.reload();
    // this.router.navigateByUrl("http://localhost:4200/loginRegister");
  }

  //Redirección del administrado para los usuarios.
  dashboard(){
    this.router.navigate(["dashboard/users"]);
  }

  //Redirección para el proveedor a sus servicios.
  myService(){
    this.router.navigate(["main/provider/myService"]);
  }

}
