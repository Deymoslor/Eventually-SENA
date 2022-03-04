import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.scss']
})
export class LoginnComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(public servicio:ServiceService) { }

  ngOnInit(): void {
  }

  loginIn():any{
    console.log("Me presionaste ");
    console.log(this.loginForm.value);

    this.servicio.Login(this.loginForm.value).subscribe(respuesta=>{

      console.log('Se está ejecutando');
      console.log(this.loginForm.value);


    });

  }

}
