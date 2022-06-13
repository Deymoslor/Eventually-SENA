import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TypeServicesI } from '../models/typeServices.interface';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-create-type-services',
  templateUrl: './create-type-services.component.html',
  styleUrls: ['./create-type-services.component.scss']
})
export class CreateTypeServicesComponent implements OnInit {

  createTypeServices = new FormGroup({
    tipoServicio: new FormControl(''),
    estadoTipoServicio: new FormControl('')
  });

  constructor(private api:ApiService, private router:Router, private alertas: AlertasService,
    private fb: FormBuilder) { 
      this.createTypeServices = this.fb.group({
        tipoServicio: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
        estadoTipoServicio: ['']
      })
    }

  ngOnInit(): void {
  }

  postForm(form:TypeServicesI){
    form.estadoTipoServicio = 1;
    this.api.postEvent(form).subscribe( data => {
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
    })
    // this.createTypeServices.reset();
    // this.refresh();
  }

  refresh(): void { window.location.reload(); }

}
