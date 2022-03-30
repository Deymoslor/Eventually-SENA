import { Component, OnInit } from '@angular/core';
import { TypeServicesI } from './models/typeServices.interface';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crud-services',
  templateUrl: './crud-services.component.html',
  styleUrls: ['./crud-services.component.scss']
})
export class CrudServicesComponent implements OnInit {

  typeServicesForm = new FormGroup({
    idTipoServicio: new FormControl(''),
    tipoServicio: new FormControl(''),
    estadoTipoServicio: new FormControl('')
  })

  dataType!: TypeServicesI;
  idTipo?:number;

  TypeServices!: TypeServicesI[];
  closeResult!: string;

  constructor(private api:ApiService, private router:Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.api.getAllTypeServices(1).subscribe(data =>{
      console.log(data);
      this.TypeServices = data;
    })
  }

  ngOnChanges(): void {
    console.log('chica que dice');
  }

  createEvent(){
      this.router.navigate(['dashboard/createTypeServices']);
      console.log(this.router)
  }

  //MODAL
  modalOpen(content:any, numb:number){
    this.idTipo = numb;
    this.api.getSingleTypeService(this.idTipo).subscribe((data:any) =>{
      this.dataType = data[0];
      this.typeServicesForm.setValue({
        'idTipoServicio': this.dataType.idTipoServicio,
        'tipoServicio': this.dataType.tipoServicio,
        'estadoTipoServicio': this.dataType.estadoTipoServicio
      })
    })
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  switchStateEvent(num: number){
    if(num != 1){
      console.log("hola soy el num " + num);
      this.typeServicesForm.setValue({
          'idTipoServicio': this.dataType.idTipoServicio,
          'tipoServicio': this.dataType.tipoServicio,
          'estadoTipoServicio': 1
      })
    }else if (num == 1) {
      console.log("hola soy el num " + num);
      this.typeServicesForm.setValue({
          'idTipoServicio': this.dataType.idTipoServicio,
          'tipoServicio': this.dataType.tipoServicio,
          'estadoTipoServicio': 0
      })
    } 
  }

  postEditForm(form: TypeServicesI){
    console.log(form);
    this.api.putTypeService(form).subscribe(data=>{
      console.log(data);
    });
    this.refresh();
  }

  refresh(): void { window.location.reload(); }


}
