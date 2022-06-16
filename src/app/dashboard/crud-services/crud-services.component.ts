import { Component, OnInit } from '@angular/core';
import { TypeServicesI } from './models/typeServices.interface';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServiceI } from './models/services.interface';
import { SupplierService } from '../crud-suppliers/service/supplier.service';
import { ProveedorI } from '../crud-suppliers/modal-suppliers-create/ProveedorI.interface';
import { ListaProveedoresI } from '../crud-suppliers/ListaProveedoresI.interface';
import { GlobalConstants } from 'src/app/global-constants';
import { DomSanitizer } from '@angular/platform-browser';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-crud-services',
  templateUrl: './crud-services.component.html',
  styleUrls: ['./crud-services.component.scss']
})
export class CrudServicesComponent implements OnInit {

  typeServicesForm = new FormGroup({
    idtipoServicio: new FormControl(''),
    tipoServicio: new FormControl(''),
    estadoTipoServicio: new FormControl('')
  })

  ServicesForm = new FormGroup({
    idServicios: new FormControl(),
    nombreServicio: new FormControl(''),
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
  idTipo?: number;

  dataProvider!: ListaProveedoresI[];
  public correoProveedor!: string;
  public listaProveedores!: any;
  public idProveedor!: any;

  TypeServices!: TypeServicesI[];
  closeResult!: string;

  previsualizacion!: string;
  public archivos: any = [];

  Services!: ServiceI[];
  idService!: number;

  constructor(private api: ApiService, private router: Router, private modalService: NgbModal,
    private apiProvider: SupplierService, private sanitizer: DomSanitizer, private alertas: AlertasService,
    private fb: FormBuilder) {

      this.ServicesForm = this.fb.group({
        idServicios: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        nombreServicio: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        descripcionServicio: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500)]],
        precioEstimado: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        imagen: ['', []],
        historialEmpresas: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(300)]],
        numeroContacto: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        correoContacto: ['', [Validators.required, Validators.email]],
        estadoServicio: ['', [Validators.required]],
        Proveedor_idProveedor: ['', []],
        TipoServicio_idtipoServicio: ['', []]
      })

      this.typeServicesForm = this.fb.group({
        idtipoServicio: ['', [Validators.required]],
        tipoServicio: ['', [Validators.required, Validators.minLength(5)]],
        estadoTipoServicio: ['', []]
      })

     }

  ngOnInit(): void {
    this.api.getAllTypeServices(1).subscribe(data => {
      // console.log(data);
      this.TypeServices = data;

    })

    this.api.getAllServices(1).subscribe(data => {
      // console.log(data);
      this.Services = data;

      this.Services.forEach(element => {
        if (element.imagen){
          element.imagen= element.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost);
        }else{
         element.imagen='';
        }
      });
    })

    this.apiProvider.getAllSuppliers(1).subscribe(data =>{
      // console.log(data);
      this.dataProvider = data;
    })

  }

  ngOnChanges(): void {
    console.log('chica que dice');
  }

  // createEvent() {
  //   this.router.navigate(['dashboard/createTypeServices']);
  //   console.log(this.router)
  // }

  //MODAL
  modalTypeServiceOpen(content: any, numb: number) {
    this.idTipo = numb;
    this.api.getSingleTypeService(this.idTipo).subscribe((data: any) => {
      this.dataType = data[0];
      console.log(this.dataType);
      this.typeServicesForm.setValue({
        'idtipoServicio': this.dataType.idtipoServicio,
        'tipoServicio': this.dataType.tipoServicio,
        'estadoTipoServicio': this.dataType.estadoTipoServicio
      })
    })

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  modalServiceOpen(content: any, numb: number) {
    this.idService = numb;
    this.api.getSingleService(this.idService).subscribe((data: any) => {
      // console.log(data[0]);
      this.dataService = data[0];

      this.apiProvider.getAllSuppliers(1).subscribe(data => {
        this.listaProveedores = data;
      });

      //Llamamos al proveedor para asignarle el nombre y no el id.
      this.apiProvider.getSingleSupplier(this.dataService.Proveedor_idProveedor).subscribe(data =>{
        // console.log(data[0]);
        this.correoProveedor = data[0].correoProveedor;
        // console.log(this.nombreProveedor);

      });

      if(this.dataService.imagen){
        this.previsualizacion = this.dataService.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost);
      }else{
        this.previsualizacion = '';
      }

      console.log(this.previsualizacion)
      this.ServicesForm.setValue({
        'idServicios': this.dataService.idServicios,
        'nombreServicio': this.dataService.nombreServicio,
        'descripcionServicio': this.dataService.descripcionServicio,
        'precioEstimado': this.dataService.precioEstimado,
        'imagen': '',
        'historialEmpresas': this.dataService.historialEmpresas,
        'numeroContacto': this.dataService.numeroContacto,
        'correoContacto': this.dataService.correoContacto,
        'estadoServicio': this.dataService.estadoServicio,
        'Proveedor_idProveedor': this.dataService.Proveedor_idProveedor,
        // 'Proveedor_idProveedor': this.nombreProveedor,
        'TipoServicio_idtipoServicio': this.dataService.TipoServicio_idtipoServicio,
      })
    })



    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  //Formulario para sacar el correo del proveedor unico cuando presione.
  buscarIdProveedor(correoProveedor:string){
    console.log(correoProveedor);

    let correoOficial = correoProveedor[0];

    console.log(correoOficial);


    //Llamamos al api para buscar el id que le pertenece a el proveedor con ese correo.
    this.apiProvider.getMailSupplier(correoProveedor).subscribe(data =>{
      console.log(data[0]);
      // this.idProveedor = data[0].idProveedor;
      // console.log(this.idProveedor);
    });

    // this.ServicesForm.setValue({
    //   'idServicios': this.dataService.idServicios,
    //   'nombreServicio': this.dataService.nombreServicio,
    //   'descripcionServicio': this.dataService.descripcionServicio,
    //   'precioEstimado': this.dataService.precioEstimado,
    //   'imagen': '',
    //   'historialEmpresas': this.dataService.historialEmpresas,
    //   'numeroContacto': this.dataService.numeroContacto,
    //   'correoContacto': this.dataService.correoContacto,
    //   'estadoServicio': this.dataService.estadoServicio,
    //   'Proveedor_idProveedor': this.dataService.Proveedor_idProveedor,
    //   // 'Proveedor_idProveedor': this.nombreProveedor,
    //   'TipoServicio_idtipoServicio': this.dataService.TipoServicio_idtipoServicio,
    // })
  }

  modalCreateServiceOpen(content: any, numb: number) {
    // this.idService = numb;
    // this.api.getSingleService(this.idService).subscribe((data: any) => {
    //   this.dataService = data[0];

    //   if(this.dataService.imagen){
    //     this.previsualizacion = this.dataService.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost);
    //   }else{
    //     this.previsualizacion = '';
    //   }

    //   console.log(this.previsualizacion)
    //   this.ServicesForm.setValue({
    //     'idServicios': this.dataService.idServicios,
    //     'nombreServicio': this.dataService.nombreServicio,
    //     'descripcionServicio': this.dataService.descripcionServicio,
    //     'precioEstimado': this.dataService.precioEstimado,
    //     'imagen': '',
    //     'historialEmpresas': this.dataService.historialEmpresas,
    //     'numeroContacto': this.dataService.numeroContacto,
    //     'correoContacto': this.dataService.correoContacto,
    //     'estadoServicio': this.dataService.estadoServicio,
    //     'Proveedor_idProveedor': this.dataService.Proveedor_idProveedor,
    //     'TipoServicio_idtipoServicio': this.dataService.TipoServicio_idtipoServicio,
    //   })
    // })



    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
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

  switchStateEvent(num: number) {
    if (num != 1) {
      console.log("hola soy el num " + num);
      this.typeServicesForm.setValue({
        'idtipoServicio': this.dataType.idtipoServicio,
        'tipoServicio': this.dataType.tipoServicio,
        'estadoTipoServicio': 1
      })
    } else if (num == 1) {
      console.log("hola soy el num " + num);
      this.typeServicesForm.setValue({
        'idtipoServicio': this.dataType.idtipoServicio,
        'tipoServicio': this.dataType.tipoServicio,
        'estadoTipoServicio': 0
      })
    }
  }

  switchStateService(num: number) {
    if (num != 1) {
      console.log("hola soy el num " + num);
      this.ServicesForm.setValue({
        'idServicios': this.dataService.idServicios,
        'nombreServicio': this.dataService.nombreServicio,
        'descripcionServicio': this.dataService.descripcionServicio,
        'precioEstimado': this.dataService.precioEstimado,
        'imagen': '',
        'historialEmpresas': this.dataService.historialEmpresas,
        'numeroContacto': this.dataService.numeroContacto,
        'correoContacto': this.dataService.correoContacto,
        'estadoServicio': 1,
        'Proveedor_idProveedor': this.dataService.Proveedor_idProveedor,
        'TipoServicio_idtipoServicio': this.dataService.TipoServicio_idtipoServicio,
      })
    } else if (num == 1) {
      console.log("hola soy el num " + num);
      this.ServicesForm.setValue({
        'idServicios': this.dataService.idServicios,
        'nombreServicio': this.dataService.nombreServicio,
        'descripcionServicio': this.dataService.descripcionServicio,
        'precioEstimado': this.dataService.precioEstimado,
        'imagen': '',
        'historialEmpresas': this.dataService.historialEmpresas,
        'numeroContacto': this.dataService.numeroContacto,
        'correoContacto': this.dataService.correoContacto,
        'estadoServicio': 0,
        'Proveedor_idProveedor': this.dataService.Proveedor_idProveedor,
        'TipoServicio_idtipoServicio': this.dataService.TipoServicio_idtipoServicio,
      })
    }
  }

  postEditFormType(form: TypeServicesI) {
    console.log(form);
    this.api.putTypeService(form).subscribe(data => {
      console.log(data);
      let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Edicion exitosa','Registro exitoso');
            setTimeout(()=>{
              this.refresh();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(()=>{
              // this.refresh();
            },2000);
          }
    });
    this.refresh();
  }

  postEditFormServices(form: ServiceI) {
    form.imagen = this.previsualizacion.replace(GlobalConstants.httpLocalHost, 'C:/xampp/htdocs');
    this.api.putService(form).subscribe(data => {
      console.log(data);
      let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('Edicion exitosa','Registro exitoso');
            setTimeout(()=>{
              this.refresh();
            },2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(()=>{
              // this.refresh();
            },2000);
          }
    });
  }

  refresh(): void { window.location.reload(); }


  capturarFile(event): void {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log("previsualizacion: " + this.previsualizacion);
    })
    this.archivos.push(archivoCapturado);
    // console.log(event);
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


}
