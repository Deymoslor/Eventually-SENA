import { Component, OnInit } from '@angular/core';
import { TypeServicesI } from './models/typeServices.interface';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceI } from './models/services.interface';

@Component({
  selector: 'app-crud-services',
  templateUrl: './crud-services.component.html',
  styleUrls: ['./crud-services.component.scss']
})
export class CrudServicesComponent implements OnInit {

  typeServicesForm = new FormGroup({
    idtipoServicio : new FormControl(''),
    tipoServicio: new FormControl(''),
    estadoTipoServicio: new FormControl('')
  })

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
    Proveedor_idProveedor: new FormControl(''),
    TipoServicio_idtipoServicio: new FormControl('')
  })

  dataType!: TypeServicesI;
  dataService!: ServiceI;
  idTipo?:number;

  TypeServices!: TypeServicesI[];
  closeResult!: string;

  Services!: ServiceI[];

  constructor(private api:ApiService, private router:Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.api.getAllTypeServices(1).subscribe(data =>{
      console.log(data);
      this.TypeServices = data;
    })

    this.api.getAllServices(1).subscribe(data =>{
      console.log(data);
      this.Services = data;
    })

  }

  ngOnChanges(): void {
    console.log('chica que dice');
  }

  createEvent(){
      this.router.navigate(['dashboard/createTypeServices']);
      console.log(this.router)
  }

  //MODAL
  modalTypeServiceOpen(content:any, numb:number){
    this.idTipo = numb;
    this.api.getSingleTypeService(this.idTipo).subscribe((data:any) =>{
      this.dataType = data[0];
      console.log(this.dataType);
      this.typeServicesForm.setValue({
        'idtipoServicio': this.dataType.idtipoServicio ,
        'tipoServicio': this.dataType.tipoServicio,
        'estadoTipoServicio': this.dataType.estadoTipoServicio
      })
    })
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  modalServiceOpen(content:any, numb:number){
    this.idTipo = numb;
    this.api.getSingleService(this.idTipo).subscribe((data:any) =>{
      this.dataService = data[0];
      console.log(this.dataService.TipoServicio_idtipoServicio)
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
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  switchStateEvent(num: number){
    if(num != 1){
      console.log("hola soy el num " + num);
      this.typeServicesForm.setValue({
          'idtipoServicio': this.dataType.idtipoServicio,
          'tipoServicio': this.dataType.tipoServicio,
          'estadoTipoServicio': 1
      })
    }else if (num == 1) {
      console.log("hola soy el num " + num);
      this.typeServicesForm.setValue({
          'idtipoServicio': this.dataType.idtipoServicio,
          'tipoServicio': this.dataType.tipoServicio,
          'estadoTipoServicio': 0
      })
    } 
  }

  switchStateService(num: number){
    if(num != 1){
      console.log("hola soy el num " + num);
      this.ServicesForm.setValue({
          'idServicios': this.dataService.idServicios,
          'nombreServicio': this.dataService.nombreServicio,
          'descripcionServicio': this.dataService.descripcionServicio,
          'precioEstimado': this.dataService.precioEstimado,
          'imagen': this.dataService.imagen,
          'historialEmpresas': this.dataService.historialEmpresas,
          'numeroContacto': this.dataService.numeroContacto,
          'correoContacto': this.dataService.correoContacto,
          'estadoServicio': 1,
          'Proveedor_idProveedor': this.dataService.Proveedor_idProveedor,
          'TipoServicio_idtipoServicio': this.dataService.TipoServicio_idtipoServicio,
      })
    }else if (num == 1) {
      console.log("hola soy el num " + num);
      this.ServicesForm.setValue({
        'idServicios': this.dataService.idServicios,
        'nombreServicio': this.dataService.nombreServicio,
        'descripcionServicio': this.dataService.descripcionServicio,
        'precioEstimado': this.dataService.precioEstimado,
        'imagen': this.dataService.imagen,
        'historialEmpresas': this.dataService.historialEmpresas,
        'numeroContacto': this.dataService.numeroContacto,
        'correoContacto': this.dataService.correoContacto,
        'estadoServicio': 0,
        'Proveedor_idProveedor': this.dataService.Proveedor_idProveedor,
        'TipoServicio_idtipoServicio': this.dataService.TipoServicio_idtipoServicio,
      })
    } 
  }

  postEditFormType(form: TypeServicesI){
    console.log(form);
    this.api.putTypeService(form).subscribe(data=>{
      console.log(data);
    });
    this.refresh();
  }

  postEditFormServices(form: ServiceI){
    console.log(form);
    this.api.putService(form).subscribe(data=>{
      console.log(data);
    });
    this.refresh();
  }

  refresh(): void { window.location.reload(); }


}
