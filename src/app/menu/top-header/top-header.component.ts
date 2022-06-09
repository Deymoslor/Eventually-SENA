import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';
import { UpdateServiceService } from '../../main-home/settings/settingsService/update-service.service';
import { SupplierService } from '../../dashboard/crud-suppliers/service/supplier.service';
import { FormControl, FormGroup } from '@angular/forms';
import { updatePersonaI } from '../../main-home/settings/updatePersonaI';
import { GlobalConstants } from 'src/app/global-constants';
import { globalAccountConstants } from 'src/app/constants/globalAccountConstants';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  public rol!:string;
  public nombrePerfil:any = undefined;
  public fotoPerfil:any = undefined;
  //Variables generales para la toma de imagenes.
  public httpLocalHost = GlobalConstants.httpLocalHost;

  //interfaz de actualización de la persona para poder traer la propiedad imagen.
  public updatePersona! : updatePersonaI;

  perfilForm  = new FormGroup({
    imagen: new FormControl('')
  })

  constructor(
    private router: Router,
    private authService: AuthService,
    private updateService: UpdateServiceService,
    private supplierService: SupplierService,
  ) { }

  ngOnInit(): void {

    //Desencriptamos el rol para saber si mostrar o no algunas cosas.
    this.rol = this.authService.desencriptar(localStorage.getItem('nombreRol'));

    //Condición para saber si viene vacío el nombre como invitado.
    if(this.rol != 'PROVEEDOR'){
      //Buscamos si es invitado para traer su nombre, en caso de venir vacío buscamos en proveedor.
      this.updateService.getSinglePerson(this.authService.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{
        this.updatePersona = data[0];
        // console.log(this.updatePersona.imagen);
        this.nombrePerfil = this.updatePersona.nombre;
        // this.fotoPerfil = datosPersona.imagen;
        this.perfilForm.setValue({
          'imagen': this.updatePersona.imagen.replace('C:/xampp/htdocs', this.httpLocalHost),
          // 'imagen' : this.updatedPersona.imagen.replace('J:/Programas/Xampp/htdocs', this.httpLocalHost),
        })
      });
    }
    // }else{
    //   //Buscamos si es proveedor para traer su nombrem en caso de venir vacío buscamos en proveedor.
    //   this.supplierService.getSingleSupplier(this.authService.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{
    //     this.updatePersona = data[0];
    //     this.perfilForm.setValue({
    //       // 'imagen': this.updatePersona.imagen.replace('C:/xampp/htdocs', this.httpLocalHost),
    //       // 'imagen' : this.updatedPersona.imagen.replace('J:/Programas/Xampp/htdocs', this.httpLocalHost),
    //     })
    //   });
    // }

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
