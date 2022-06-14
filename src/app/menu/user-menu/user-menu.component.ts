import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { UpdateServiceService } from 'src/app/main-home/settings/settingsService/update-service.service';
import { updatePersonaI } from 'src/app/main-home/settings/updatePersonaI';
import { SupplierService } from 'src/app/dashboard/crud-suppliers/service/supplier.service';
import { updateImagenProfile } from './updateImagenProfile.interface';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent{

  //Variable general para la toma de imagenes con API y BD.
  public httpLocalHost = GlobalConstants.httpLocalHost;

  public rol!:string;
  public nombrePerfil:any = undefined;
  // public fotoPerfil:any = undefined;

  //interfaz de actualización de la persona para poder traer la propiedad imagen.
  public imagenProfile! : updateImagenProfile;

  //interfaz para los datos de la persona.
  public datosPersona: any;

  imagenPerfilForm  = new FormGroup({
    imagen: new FormControl('')
  })

  constructor(

    private authService: AuthService,
    private updateService: UpdateServiceService,
    private supplierService: SupplierService,

  ){ }

  ngOnInit() {

    //Desencriptamos el rol para saber si mostrar o no algunas cosas.
    this.rol = this.authService.desencriptar(localStorage.getItem('nombreRol'));

    //Condición para saber si viene vacío el nombre como invitado.
    if(this.rol != 'PROVEEDOR'){
      //Buscamos si es invitado para traer su nombre, en caso de venir vacío buscamos en proveedor.
      this.updateService.getSinglePerson(this.authService.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{
        console.log(data[0]);

        //variable para almacenar datos y asignar nombre y correo
        this.datosPersona = data[0];

        //variable de clase para almacenar datos y asignar imagen de perfil.
        this.imagenProfile = data[0];

        this.nombrePerfil = this.datosPersona.nombre;

        this.imagenPerfilForm.setValue({
          'imagen': this.imagenProfile.imagen.replace('C:/xampp/htdocs', this.httpLocalHost),
          // 'imagen' : this.imagenProfile.imagen.replace('J:/Programas/Xampp/htdocs', this.httpLocalHost),
        })
      });
    }else{
      //Buscamos si es proveedor para traer su nombrem en caso de venir vacío buscamos en proveedor.
      this.supplierService.getSingleSupplier(this.authService.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{
        let datosProveedor = data[0];
        this.imagenPerfilForm.setValue({
          // 'imagen': this.imagenProfile.imagen.replace('C:/xampp/htdocs', this.httpLocalHost),
          'imagen' : this.imagenProfile.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost),
        })
      });
      console.log('Es proveedor');

    }

  }

}
