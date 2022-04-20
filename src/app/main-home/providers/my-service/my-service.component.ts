import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceI } from '../models/service.interface';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.scss']
})
export class MyServiceComponent implements OnInit {

  dataService!: ServiceI;

  idProvider!: number;
  numb!:number

  ServicesForm = new FormGroup({
    idServicios: new FormControl(), 
    nombreServicio : new FormControl(''),
    descripcionServicio: new FormControl(''),
    precioEstimado: new FormControl(),
    imagen: new FormControl(''),
    historialEmpresas: new FormControl(''),
    numeroContacto: new FormControl(),
    correoContacto: new FormControl(''),
    estadoServicio: new FormControl(0),
    Proveedor_idProveedor: new FormControl(''),
    TipoServicio_idtipoServicio: new FormControl('')
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.idProvider =3;
    this.api.getSingleServiceProvider(this.idProvider).subscribe((data:any) =>{
      if (data >= 0){
        this.router.navigateByUrl('provider/createService')
      }
      this.dataService = data[0];
      this.ServicesForm.setValue({
        'idServicios': this.dataService.idServicios,
        'nombreServicio': this.dataService.nombreServicio,
        'descripcionServicio': this.dataService.descripcionServicio,
        'precioEstimado': this.dataService.precioEstimado,
        'imagen': this.dataService.imagen,
        'historialEmpresas': this.dataService.historialEmpresas,
        'numeroContacto': this.dataService.numeroContacto,
        'correoContacto': this.dataService.correoContacto,
        'estadoServicio': this.dataService.estadoServicio,
        'Proveedor_idProveedor': this.dataService.Proveedor_idProveedor,
        'TipoServicio_idtipoServicio': this.dataService.TipoServicio_idtipoServicio,
    })
    })
  }

  changeStateServiceProv(form:ServiceI){
      console.log(form);
      if(form.estadoServicio == 0){
        form.estadoServicio = 1;
      }else{
        form.estadoServicio = 2;
      }
      this.api.putService(form).subscribe(data=>{
        console.log(data);
      });
      this.refresh();
  }

  refresh(){
    window.location.reload();
  }

  
}
