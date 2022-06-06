import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { TypeServicesI } from 'src/app/dashboard/crud-services/models/typeServices.interface';
import { ApiService } from '../services/api.service';
import { ServiceI } from '../models/service.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})

export class CreateServiceComponent implements OnInit {

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

  public previsualizacion!: string;
  public archivos: any = [];

  constructor(private calendar: NgbCalendar, private api: ApiService, private router:Router, 
    private auth: AuthService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.api.getSingleServiceProvider(this.auth.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{
      if(data){

      }else{
        
      }
    });

    this.api.getAllTypeServices(1).subscribe(data =>{
      this.dataTypeService = data;
      console.log(data);
    })


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
