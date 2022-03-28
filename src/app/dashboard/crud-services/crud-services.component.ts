import { Component, OnInit } from '@angular/core';
import { TypeServicesI } from './models/typeServices.interface';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-services',
  templateUrl: './crud-services.component.html',
  styleUrls: ['./crud-services.component.scss']
})
export class CrudServicesComponent implements OnInit {


  TypeServices!: TypeServicesI[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllTypeServices(1).subscribe(data =>{
      console.log(data);
      this.TypeServices = data;
    })
  }

  editEvent(id: number){
    // this.id = id;
    // // console.log(this.id);
  }

  createEvent(){
      this.router.navigate(['dashboard/createTypeServices']);
      console.log(this.router)
  }


}
