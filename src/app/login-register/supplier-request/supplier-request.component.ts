import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accountService } from '../service/accountService.service';
import { supplierRequestI } from './supplierRequestI.interface';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ResponseI } from '../login/models/response.intarface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-supplier-request',
  templateUrl: './supplier-request.component.html',
  styleUrls: ['./supplier-request.component.scss']
})
export class SupplierRequestComponent implements OnInit {

  peticionProveedor : FormGroup;

  constructor(

    private router:Router,
    private formBuilder:FormBuilder,
    private accountService:accountService,
    private alertas:AlertasService,

  ) {

    this.peticionProveedor = this.formBuilder.group({
      Email: ['',[Validators.required, Validators.email]],
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      msg: ['Por favor digite aquí toda la información relevante a su persona / empresa (numero de identificación, labor, tiempo de experiencia. . .) y la razón por la que desea entrar a ser proveedor en Eventually.',[Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]]
    });

  }

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
        },2000);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Error');
      }
    })

  }

  clean(){
    // console.log('Test');
    this.peticionProveedor.setValue({
      'Email': this.peticionProveedor.value.Email,
      'nombre': this.peticionProveedor.value.nombre,
      'msg' : "",
    });
  }

  //Servicio para cancelar la solicitud y volver al login.
  cancel(){
    this.router.navigate(['/loginRegister']);
  }


}
