import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { ResponseI } from '../../../core/ui/response.interface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-modal-likes',
  templateUrl: './modal-likes.component.html',
  styleUrls: ['./modal-likes.component.scss']
})
export class ModalLikesComponent implements OnInit {

  // model: NgbDateStruct | undefined;
  // date: { year: number; month: number;} | undefined;

  createLikeForm : FormGroup;

  constructor(private ng:FormBuilder,private calendar: NgbCalendar,private api:ApiService,private alertas:AlertasService, private formBuilder: FormBuilder,) {

    this.createLikeForm = this.formBuilder.group({
      nombreGusto: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/)]],
      idtipoGusto: [],
      estadoGusto: [],
    })

  }

  likes!:LikesI[];

  ngOnInit(): void {

  }

  ngOnChanges(): void{
    // this.api.getAllTypesLikes(1).subscribe(data => {this.typeslikes=data})
  }

  postForm(form:LikesI){
    this.api.postLike(form).subscribe( data => {
      let respuesta:ResponseI = data;
      //Verificamos si la respuesta es exitosa.
      if(respuesta.status == 'ok'){
        this.alertas.showSuccess('Gusto creado','Acción exitosa');
        // console.log("Entrando aquí");
        setTimeout(() =>{
          //redirecionamos a el login.
          window.location.reload();
        },2000);
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
        window.location.reload();
      }
    })
    // this.createLikeForm.reset();
  }

}
