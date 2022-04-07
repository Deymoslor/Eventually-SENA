import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LikesI, LikesIns } from 'src/app/models/likes';
import { TypesLikesI } from 'src/app/models/typesLikes';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modal-likes',
  templateUrl: './modal-likes.component.html',
  styleUrls: ['./modal-likes.component.scss']
})
export class ModalLikesComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: { year: number; month: number;} | undefined;
  
  createLikeForm = new FormGroup({
    
    nombreGusto: new FormControl(''),
    // idTipoGusto: new FormControl(''),
    // estadoGusto: new FormControl(''),
    
  });

  constructor(private ng:FormBuilder,private calendar: NgbCalendar,private api:ApiService) { 
    
  }
  typeslikes?:TypesLikesI[];
  likes?:LikesIns[];
  ngOnInit(): void {
    this.api.getAllTypesLikes(1).subscribe(data => {this.typeslikes=data})
    
    this.createLikeForm = this.ng.group({
      nombreGusto: ['', [Validators.required, Validators.minLength(2)]],
      // idTipoGusto: [''],
      // estadoGusto: ['2'],
    });
  }
  postForm(form:LikesIns){
    console.log(form);

    
    this.api.postLike(form).subscribe( data => {
      console.log(data);
    })
    this.createLikeForm.reset();
  }
  guardar(){
    console.log("si");
  }

  clearForm(){
    this.createLikeForm.reset();
  }

}
