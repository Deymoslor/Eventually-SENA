import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accountService } from '../service/accountService.service';
import { supplierRequestI } from './supplierRequestI.interface';
import { FormGroup, FormControl, Validators} from '@angular/forms';


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
    private accountService:accountService

  ) { }

  ngOnInit(): void {
  }

  //Servicio para llamar al service y enviar el email.
  enviarMailSolicitud(form:supplierRequestI){
    this.accountService.postMail(form).subscribe(data =>{
      // console.log(data);

      this.router.navigate(['/loginRegister']);
    })

  }

  //Servicio para cancelar la solicitud y volver al login.
  cancel(){
    this.router.navigate(['/loginRegister']);
  }

}
