import { Component, OnInit } from '@angular/core';
import { accountService } from '../service/accountService.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { changeEmailI } from './change-email.interface';

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
    private formBuilder:FormBuilder
  )
  {

    this.cambioCorreoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      apellidos: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      documento: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
      Email1: ['',[Validators.required, Validators.email]],
      Email2: ['',[Validators.required, Validators.email]],
      msg: ['',[Validators.required, Validators.email]],
    })

  }

  ngOnInit(): void {

  }

  postForm(form:changeEmailI){

    this.service.postEmail(form).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/loginRegister/login']);
    });

  }

  cancel(){

  }

}
