import { Component, OnInit } from '@angular/core';
import { accountService } from '../service/accountService.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { changeEmailI } from './change-email.interface';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';
import { AlertasService } from '../../core/service/alertas.service';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent implements OnInit {

  cambioCorreoForm!: FormGroup;

  constructor(
    private service:accountService,
    private router:Router,
    private formBuilder:FormBuilder,
    private alertas:AlertasService,
  )
  {

    this.cambioCorreoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      documento: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
      Email1: ['',[Validators.required, Validators.email]],
      Email2: ['',[Validators.required, Validators.email]],
      msg: [' ',[Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
    })

  }

  ngOnInit(): void {

  }

  postForm(form:changeEmailI){

    this.service.postEmail(form).subscribe(data =>{
      // console.log(data);
      let respuesta:ResponseI = data;
      if(respuesta.status == 'ok'){
        this.alertas.showSuccess('Intentaremos responder en el menor tiempo posible, se te comunicará para el cambio de email.','Solicitud enviada de manera correcta.');
        setTimeout(() =>{
          //redirecionamos a el login.
          this.router.navigate(['/loginRegister/login']);
        },5000)
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Error');
      }
    });

  }

  cancel(){
    this.router.navigate(['/settings/settings-account']);
  }

}
