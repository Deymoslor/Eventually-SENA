import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeServicesI } from '../models/typeServices.interface';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

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

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  postForm(form:TypeServicesI){
    form.estadoTipoServicio = 1;
    this.api.postEvent(form).subscribe( data => {
      console.log(data);
    })
    this.createTypeServices.reset();
    this.refresh();
  }

  refresh(): void { window.location.reload(); }

}
