import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { TypeServicesI } from 'src/app/dashboard/crud-services/models/typeServices.interface';
import { ServiceI } from '../../models/service.interface';
import { ApiService } from '../../services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalConstants } from '../../../../global-constants';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';


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
    fechaInicio: new FormControl(''),
    historialEmpresas: new FormControl(''),
    numeroContacto: new FormControl(),
    correoContacto: new FormControl(''),
    estadoServicio: new FormControl(),
    Proveedor_idProveedor: new FormControl(1),
    TipoServicio_idtipoServicio: new FormControl(''),
    check: new FormControl('')
  })

  @Input() childMessage!: number;

  model: NgbDateStruct | undefined;
  date: { year: number; month: number;} | undefined;

  dataTypeService!: TypeServicesI[]
  dataService!: ServiceI;

  public previsualizacion!: string;
  public archivos: any = [];  
  imagenLlegada!: string
  actualDate!: Date;
  dateS!: string;

  constructor(private calendar: NgbCalendar, private api: ApiService, private sanitizer: DomSanitizer,
    private alertas: AlertasService, private fb:FormBuilder) {

      this.ServicesForm = this.fb.group({
        idServicios: [''],
        nombreServicio : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        descripcionServicio: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(300)]],
        precioEstimado: ['' , [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        imagen: [''],
        fechaInicio: ['' , [Validators.required]],
        historialEmpresas: ['' , [Validators.required, Validators.minLength(15), Validators.maxLength(300)]],
        numeroContacto: ['' , [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        correoContacto: ['' , [Validators.required, Validators.email]],
        estadoServicio: [''],
        Proveedor_idProveedor: [''],
        TipoServicio_idtipoServicio: [''],
        check: ['', Validators.requiredTrue]
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
      this.api.getSingleServiceProv(this.childMessage).subscribe((data: any) =>{
        this.dataService = data[0];
        console.log(this.dataService);
          console.log(this.dataService);
          if (this.dataService.imagen) {
            this.previsualizacion = this.dataService.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost);
          }
          console.log("imagen: " + this.previsualizacion);
          this.ServicesForm.setValue({
            idServicios: this.dataService.idServicios,
            nombreServicio : this.dataService.nombreServicio,
            descripcionServicio: this.dataService.descripcionServicio,
            precioEstimado: this.dataService.precioEstimado,
            imagen: '',
            fechaInicio: this.dataService.fechaInicio,
            historialEmpresas: this.dataService.historialEmpresas,
            numeroContacto: this.dataService.numeroContacto,
            correoContacto: this.dataService.correoContacto,
            estadoServicio: this.dataService.estadoServicio,
            Proveedor_idProveedor: this.dataService.Proveedor_idProveedor,
            TipoServicio_idtipoServicio: this.dataService.TipoServicio_idtipoServicio,
            check: null
          })
          


        
      })
    })
    
    
  }

  putEditForm(form: ServiceI){
    console.log(form);
    form.imagen = this.previsualizacion.replace(GlobalConstants.httpLocalHost, 'C:/xampp/htdocs');
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
