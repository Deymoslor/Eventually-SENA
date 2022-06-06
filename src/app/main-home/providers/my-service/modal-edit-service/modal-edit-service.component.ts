import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { TypeServicesI } from 'src/app/dashboard/crud-services/models/typeServices.interface';
import { ServiceI } from '../../models/service.interface';
import { ApiService } from '../../services/api.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-modal-edit-service',
  templateUrl: './modal-edit-service.component.html',
  styleUrls: ['./modal-edit-service.component.scss']
})
export class ModalEditServiceComponent implements OnInit {

// httpLocalHost = 'http://localhost:8181'; //SENA
httpLocalHost = 'http://localhost'; //CASA

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

  public previsualizacion!: string;
  public archivos: any = [];  
  imagenLlegada!: string

  constructor(private calendar: NgbCalendar, private api: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
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

  ngOnChanges(): void {
    console.log("id servicio: " + this.childMessage)
    this.api.getAllTypeServices(1).subscribe(data =>{
      this.dataTypeService = data;
    })
    this.api.getSingleServiceProv(this.childMessage).subscribe((data: any) =>{
      console.log(data[0]);
      try {
        this.dataService = data[0];
        let actualImage = this.dataService.imagen.replace('C:/xampp/htdocs', this.httpLocalHost);
        
        this.previsualizacion = actualImage;
        console.log("imagen: " + this.previsualizacion);
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
        
      } catch (e) {
        console.log(e);
      }
    })
    
  }

  putEditForm(form: ServiceI){
    console.log(form);
    form.imagen = this.previsualizacion;
    this.api.putService(form).subscribe(data=>{
      console.log(data);
    });
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }
}
