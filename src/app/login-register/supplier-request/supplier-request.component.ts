import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accountService } from '../service/accountService.service';
import { supplierRequestI } from './supplierRequestI.interface';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ResponseI } from '../login/models/response.intarface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-supplier-request',
  templateUrl: './supplier-request.component.html',
  styleUrls: ['./supplier-request.component.scss']
})
export class SupplierRequestComponent implements OnInit {

  peticionProveedor = new FormGroup({
    Email: new FormControl(''),
    nombre: new FormControl(''),
    msg: new FormControl('')
  });

  constructor(

    private router:Router,
    private accountService:accountService,
    private alertas:AlertasService,

  ) { }

  ngOnInit(): void {
  }

  //Servicio para llamar al service y enviar el email.
  enviarMailSolicitud(form:supplierRequestI){
    this.accountService.postMail(form).subscribe(data =>{
      // console.log(data);

      let respuesta:ResponseI = data;
      console.log(respuesta.status);

      if(respuesta.status == 'ok'){
        this.alertas.showSuccess('El correo se ha enviado correctamente intentaremos responderle en el menor tiempo posible','Solicitud de proveedor realizada');
        setTimeout(() =>{
          //redirecionamos a el login.
          this.router.navigate(['/loginRegister']);
        },5000);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Error');
      }
    })

  }

  //Servicio para cancelar la solicitud y volver al login.
  cancel(){
    this.router.navigate(['/loginRegister']);
  }

}
