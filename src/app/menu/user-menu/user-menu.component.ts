import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { UpdateServiceService } from 'src/app/main-home/settings/settingsService/update-service.service';
import { updatePersonaI } from 'src/app/main-home/settings/updatePersonaI';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent{

  public rol!:string;
  public nombrePerfil:any = undefined;
  // public fotoPerfil:any = undefined;

  //interfaz de actualización de la persona para poder traer la propiedad imagen.
  public updatedPersona! : updatePersonaI;

  perfilForm  = new FormGroup({
    imagen: new FormControl('')
  })

  //Variables generales para la toma de imagenes.
  // httpLocalHost = 'http://localhost:8181'; //SENA
  httpLocalHost = 'http://localhost'; //CASA

  constructor(

    private authService: AuthService,
    private updateService: UpdateServiceService,

  ){ }

  ngOnInit() {

    //Desencriptamos el rol para saber si mostrar o no algunas cosas.
    this.rol = this.authService.desencriptar(localStorage.getItem('nombreRol'));

    //Condición para saber si viene vacío el nombre como invitado.
    if(this.rol != 'PROVEEDOR'){
      //Buscamos si es invitado para traer su nombre, en caso de venir vacío buscamos en proveedor.
      this.updateService.getSinglePerson(this.authService.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{
        console.log(data[0]);

        // let datosPersona = data[0];
        this.updatedPersona = data[0];
        this.nombrePerfil = this.updatedPersona.nombre;
        // this.fotoPerfil = datosPersona.imagen;
        this.perfilForm.setValue({
          // 'imagen': this.group.imagen.replace('C:/xampp/htdocs', this.httpLocalHost),
          'imagen' : this.updatedPersona.imagen.replace('J:/Programas/Xampp/htdocs', this.httpLocalHost),
        })
      });
    }else{
      //Buscamos si es proveedor para traer su nombrem en caso de venir vacío buscamos en proveedor.
      // this.supplierService.getSingleSupplier(this.authService.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{
      //   let datosProveedor = data[0];
      //   this.perfilForm.setValue({
      //     'imagen': this.updatedPersona.imagen.replace('C:/xampp/htdocs', this.httpLocalHost),
      //   })
      // });
      console.log('Es proveedor');

    }

  }

}
