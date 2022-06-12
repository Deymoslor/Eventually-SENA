import { Component, Input, OnInit } from '@angular/core';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AlertasService } from 'src/app/core/service/alertas.service';


@Component({
  selector: 'app-modal-edit-likes',
  templateUrl: './modal-edit-likes.component.html',
  styleUrls: ['./modal-edit-likes.component.scss']
})
export class ModalEditLikesComponent implements OnInit {

 @Input() childMessage!:number

  constructor(
    private api:ApiService,
    private alertas:AlertasService
  ) { }

  public likes!:LikesI;

  editForm  = new FormGroup({
    nombreGusto:new FormControl(''),
    idGusto:new FormControl(''),
    estadoGusto:new FormControl('')
    // idtipoGusto:new FormControl(''),
  })

  // typeslikes?:TypesLikesI[];

  ngOnInit(): void {
    // this.api.getAllTypesLikes(1).subscribe(data => {
    //   console.log(data)
    //   this.typeslikes=data})
  }

  ngOnChanges(): void {
    // console.log(this.childMessage);

    if(this.childMessage > 0){
      this.api.getSingleLikes(this.childMessage).subscribe((data:any)=>{
        this.likes = data[0];
        // console.log(this.likes);
        this.editForm.setValue({
          'idGusto' : this.likes.idGusto,
          'nombreGusto' : this.likes.nombreGusto,
          'estadoGusto' : this.likes.estadoGusto
        });

        // this.editForm.setValue({
        //   'idGusto' : this.likes.,
        //   'nombreGusto' : this.likes?.nombreGusto,
        //   // 'idtipoGusto':this.likes?.idtipoGusto,
        // })
      });
    }
  }

  postEditLike(form:LikesI){
    
    // console.log(form);
    this.api.putLikes(form).subscribe(data=>{
      let respuesta:any = data;
      //Verificamos si la respuesta es exitosa.
      if(respuesta.status == 'ok'){
        this.alertas.showSuccess('Gusto actualizado','Acción exitosa');
        // console.log("Entrando aquí");
        setTimeout(() =>{
          // console.log(data);
          window.location.reload();
        },2000);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
        window.location.reload();
      }
    })
  }
}
