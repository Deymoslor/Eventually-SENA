import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceI } from '../models/service.interface';
import { AuthService } from 'src/app/core/service/auth.service';
import { GlobalConstants } from '../../../global-constants';
import { TypeServicesI } from 'src/app/dashboard/crud-services/models/typeServices.interface';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.scss']
})
export class MyServiceComponent implements OnInit {

  previsualizacion!: string;
  public archivos: any = [];
  actualImage!: string;

  dataService!: ServiceI;
  dataTypeService!: TypeServicesI[]

  idProvider!: number;
  numb!:number


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
    estadoServicio: new FormControl(0),
    Proveedor_idProveedor: new FormControl(''),
    TipoServicio_idtipoServicio: new FormControl('')
  })

  constructor(private api: ApiService, private router: Router, private auth: AuthService,
    private alertas: AlertasService) { }

  ngOnInit(): void {
    this.idProvider = this.auth.desencriptar(localStorage.getItem('id'));
    this.api.getAllTypeServices(1).subscribe(data =>{
      this.dataTypeService = data;
    })

    this.api.getSingleServiceProvider(this.auth.desencriptar(localStorage.getItem('id'))).subscribe((data:any) =>{

      // console.log(this.auth.desencriptar(localStorage.getItem('nombreRol')));
      console.log(data);

      if (data >= 0){
        // this.router.navigateByUrl('provider/createService');
        // this.router.navigate(['main/provider/createService']);
        this.router.navigate(['main/provider/createService']);
        // break;
      }
      this.dataService = data[0];
      this.previsualizacion = this.dataService.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost);
      console.log("my service; " + this.dataService.imagen);
      this.ServicesForm.setValue({
        'idServicios': this.dataService.idServicios,
        'nombreServicio': this.dataService.nombreServicio,
        'descripcionServicio': this.dataService.descripcionServicio,
        'precioEstimado': this.dataService.precioEstimado,
        'imagen': this.previsualizacion,
        'fechaInicio': this.dataService.fechaInicio,
        'historialEmpresas': this.dataService.historialEmpresas,
        'numeroContacto': this.dataService.numeroContacto,
        'correoContacto': this.dataService.correoContacto,
        'estadoServicio': this.dataService.estadoServicio,
        'Proveedor_idProveedor': this.dataService.Proveedor_idProveedor,
        'TipoServicio_idtipoServicio': this.dataService.TipoServicio_idtipoServicio,
    })
    console.log("id servicio: " + this.ServicesForm.get('imagen')!.value);
    })


  }

  changeStateServiceProv(form:ServiceI){
      console.log(form);
      form.imagen = this.previsualizacion.replace(GlobalConstants.httpLocalHost, 'C:/xampp/htdocs');
      if(form.estadoServicio == 2){
        form.estadoServicio = 1;
      }else{
        form.estadoServicio = 2;
      }
      this.api.putService(form).subscribe(data=>{
        console.log(data);
        let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Deshabilitar Servicio','Función exitosa');
            setTimeout(()=>{
              this.refresh();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(()=>{
              this.refresh();
            },2000);
          }
      });
      // this.refresh();
  }

  refresh(){
    window.location.reload();
  }


}
