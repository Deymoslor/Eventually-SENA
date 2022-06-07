import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { TypeServicesI } from 'src/app/dashboard/crud-services/models/typeServices.interface';
import { ApiService } from '../services/api.service';
import { ServiceI } from '../models/service.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { SupplierService } from 'src/app/dashboard/crud-suppliers/service/supplier.service';
import { ProveedorIA } from './proveedorI.interface';
import { timeStamp } from 'console';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})

export class CreateServiceComponent implements OnInit {

  datosProveedor!:ProveedorIA;
  ley!:number;

  lawForm: FormGroup;

  ServicesForm = new FormGroup({
    idServicios: new FormControl(),
    nombreServicio : new FormControl(''),
    descripcionServicio: new FormControl(''),
    precioEstimado: new FormControl(),
    imagen: new FormControl(''),
    fechaInicio: new FormControl(''),
    historialEmpresas: new FormControl(''),
    numeroContacto: new FormControl(),
    correoContacto: new FormControl(''),
    estadoServicio: new FormControl(),
    Proveedor_idProveedor: new FormControl(1),
    TipoServicio_idtipoServicio: new FormControl('')
  });

  dataTypeService!: TypeServicesI[]




  model!: NgbDateStruct;
  date!: {year: number, month: number};

  public previsualizacion!: string;
  public archivos: any = [];
  actualDate!: Date;
  dateS!: string;

  constructor(private calendar: NgbCalendar, private api: ApiService, private router:Router,
     private auth: AuthService, private supplierService: SupplierService, private formBuilder:FormBuilder,
      private sanitizer: DomSanitizer){

    this.lawForm = this.formBuilder.group({
      check: ['', Validators.requiredTrue],
    })

  }


  ngOnInit(): void {
    //Date operations
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    this.actualDate = date;
    this.dateS = this.actualDate.getFullYear() + "-" + ((this.actualDate.getMonth() + 1).toString().padStart(2,'0')) + "-" + (this.actualDate.getDate()).toString().padStart(2, '0');
    // console.log('fecha actual: ' + this.dateS);
    //Service operations
    this.api.getSingleServiceProvider(this.auth.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{
      console.log(data);
      if(data){
        console.log('entre!!');
        this.router.navigateByUrl('provider/myService');
      }else if(!data){
        this.api.getAllTypeServices(1).subscribe(data =>{
          this.dataTypeService = data;
          console.log(data);
        })
      }
    });

    this.supplierService.getSingleSupplier(this.auth.desencriptar(localStorage.getItem('id'))).subscribe(data =>{

      this.datosProveedor = data[0];
      this.ley = this.datosProveedor.aceptado;
      console.log(this.ley);

    })

  }

  postForm(form:any){
    this.supplierService.updateSupplierLaw(this.auth.desencriptar(localStorage.getItem('id'))).subscribe(data =>{
      // console.log(data[0]);
      window.location.reload();
    })
  }

  cancel(){
    this.router.navigate(['providers/createService']);
  }

  capturarFile(event): void {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen)
    })
    this.archivos.push(archivoCapturado);
    console.log(event);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) =>{
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return null;
    }
    return $event;
  });

  postServiceProv(form: ServiceI){
    console.log(form);
    form.Proveedor_idProveedor = this.auth.desencriptar(localStorage.getItem('id'));
    form.imagen = this.previsualizacion;
    this.api.postServiceProv(form).subscribe(data=>{
      console.log(data);
    });

    this.router.navigateByUrl('provider/myService');
  }

}
