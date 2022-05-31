import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { TypeServicesI } from 'src/app/dashboard/crud-services/models/typeServices.interface';
import { ApiService } from '../services/api.service';
import { ServiceI } from '../models/service.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { SupplierService } from 'src/app/dashboard/crud-suppliers/service/supplier.service';
import { ProveedorIA } from './proveedorI.interface';


@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})

export class CreateServiceComponent implements OnInit {

  datosProveedor!:ProveedorIA;
  ley!:number;
  
  ServicesForm = new FormGroup({
    idServicios: new FormControl(), 
    nombreServicio : new FormControl(''),
    descripcionServicio: new FormControl(''),
    precioEstimado: new FormControl(),
    imagen: new FormControl(''),
    historialEmpresas: new FormControl(''),
    numeroContacto: new FormControl(),
    correoContacto: new FormControl(''),
    estadoServicio: new FormControl(),
    Proveedor_idProveedor: new FormControl(1),
    TipoServicio_idtipoServicio: new FormControl('')
  })

  dataTypeService!: TypeServicesI[]
  

  model!: NgbDateStruct;
  date!: {year: number, month: number};

  constructor(private calendar: NgbCalendar, private api: ApiService, private router:Router, private auth: AuthService, private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.api.getAllTypeServices(1).subscribe(data =>{
      this.dataTypeService = data;
      console.log(data);
    })

    this.supplierService.getSingleSupplier(this.auth.desencriptar(localStorage.getItem('id'))).subscribe(data =>{

      this.datosProveedor = data[0];
      this.ley = this.datosProveedor.aceptado;
      console.log(this.ley);

    })

  }

  postServiceProv(form: ServiceI){
    console.log(form);
    form.Proveedor_idProveedor = this.auth.desencriptar(localStorage.getItem('id'));
    this.api.postServiceProv(form).subscribe(data=>{
      console.log(data);
    });

    this.router.navigateByUrl('provider/myService');
  }

}
