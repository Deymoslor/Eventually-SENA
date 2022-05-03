import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modal-likes',
  templateUrl: './modal-likes.component.html',
  styleUrls: ['./modal-likes.component.scss']
})
export class ModalLikesComponent implements OnInit {

  // model: NgbDateStruct | undefined;
  // date: { year: number; month: number;} | undefined;

  createLikeForm = new FormGroup({

    nombreGusto: new FormControl(''),
    idtipoGusto: new FormControl(''),
    estadoGusto: new FormControl('2'),

  });

  constructor(private ng:FormBuilder,private calendar: NgbCalendar,private api:ApiService) {

  }

  likes!:LikesI[];

  ngOnInit(): void {

  }

  ngOnChanges(): void{
    // this.api.getAllTypesLikes(1).subscribe(data => {this.typeslikes=data})
  }

  postForm(form:LikesI){
    this.api.postLike(form).subscribe( data => {
      window.location.reload();
      // console.log(data);
    })
    // this.createLikeForm.reset();
  }

}
