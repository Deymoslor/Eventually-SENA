import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { ServiceI } from 'src/app/main-home/providers/models/service.interface';
import { ApiService } from 'src/app/main-home/providers/services/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-info-ser-prov',
  templateUrl: './modal-info-ser-prov.component.html',
  styleUrls: ['./modal-info-ser-prov.component.scss']
})
export class ModalInfoSerProvComponent implements OnInit {

  @Input() idProv!: number;

  dataService!: ServiceI;
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
  });

  // httpLocalHost = 'http://localhost:8181'; //SENA
  httpLocalHost = 'http://localhost'; //CASA

  constructor(private api: ApiService, private auth: AuthService) { }

  ngOnInit(): void {
    this.api.getSingleServiceProvider(this.idProv).subscribe((data:any) =>{
      console.log(data);
      this.dataService = data[0];
      this.ServicesForm.setValue({
        'idServicios': this.dataService.idServicios,
        'nombreServicio': this.dataService.nombreServicio,
        'descripcionServicio': this.dataService.descripcionServicio,
        'precioEstimado': this.dataService.precioEstimado,
        'imagen': this.dataService.imagen.replace('C:/xampp/htdocs', this.httpLocalHost),
        'fechaInicio': this.dataService.fechaInicio,
        'historialEmpresas': this.dataService.historialEmpresas,
        'numeroContacto': this.dataService.numeroContacto,
        'correoContacto': this.dataService.correoContacto,
        'estadoServicio': this.dataService.estadoServicio,
        'Proveedor_idProveedor': this.dataService.Proveedor_idProveedor,
        'TipoServicio_idtipoServicio': this.dataService.TipoServicio_idtipoServicio,
    })
    })
  }

  ngOnChanges(): void{
    // console.log(this.idProv);
  }

}
