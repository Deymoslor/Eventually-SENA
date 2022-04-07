import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { TypeServicesI } from 'src/app/dashboard/crud-services/models/typeServices.interface';
import { ServiceI } from '../../models/service.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-modal-edit-service',
  templateUrl: './modal-edit-service.component.html',
  styleUrls: ['./modal-edit-service.component.scss']
})
export class ModalEditServiceComponent implements OnInit {

  ServicesForm = new FormGroup({
    idServicios: new FormControl(''),
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

  @Input() childMessage!: number;

  model: NgbDateStruct | undefined;
  date: { year: number; month: number;} | undefined;

  dataTypeService!: TypeServicesI[]
  dataService!: ServiceI;

  constructor(private calendar: NgbCalendar, private api: ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.childMessage)
    this.api.getAllTypeServices(1).subscribe(data =>{
      this.dataTypeService = data;
    })
    this.api.getSingleServiceProv(this.childMessage).subscribe((data: any) =>{

      this.dataService = data[0]

      this.ServicesForm.setValue({
        idServicios: this.dataService.idServicios,
        nombreServicio : this.dataService.nombreServicio,
        descripcionServicio: this.dataService.descripcionServicio,
        precioEstimado: this.dataService.precioEstimado,
        imagen: '',
        historialEmpresas: this.dataService.historialEmpresas,
        numeroContacto: this.dataService.numeroContacto,
        correoContacto: this.dataService.correoContacto,
        estadoServicio: this.dataService.estadoServicio,
        Proveedor_idProveedor: this.dataService.Proveedor_idProveedor,
        TipoServicio_idtipoServicio: this.dataService.TipoServicio_idtipoServicio
      })
    })
  }
  upload2(){
    this.ServicesForm.setValue({
      imagen: this.dataService.imagen
    })
  }

  putEditForm(form: ServiceI){
    console.log(form);
    this.api.putService(form).subscribe(data=>{
      console.log(data);
    });
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }
}
