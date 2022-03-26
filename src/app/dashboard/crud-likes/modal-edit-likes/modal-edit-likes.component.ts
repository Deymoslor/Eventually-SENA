import { Component, Input, OnInit } from '@angular/core';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TypesLikesI } from 'src/app/models/typesLikes';

@Component({
  selector: 'app-modal-edit-likes',
  templateUrl: './modal-edit-likes.component.html',
  styleUrls: ['./modal-edit-likes.component.scss']
})
export class ModalEditLikesComponent implements OnInit {
  
 @Input() childMessage!:number
    
  constructor(
    private api:ApiService
  ) { }

  likes?:LikesI;
    editForm  = new FormGroup({
      nombreGusto:new FormControl(''),
      idGusto:new FormControl(''),
      idTipoGusto:new FormControl(''),
    })
    typeslikes?:TypesLikesI[];
  ngOnInit(): void {
    this.api.getAllTypesLikes(1).subscribe(data => {this.typeslikes=data})
  }
  ngOnChanges(): void {
    if(this.childMessage > 0){
      this.api.getSingleLikes(this.childMessage).subscribe((data:any)=>{
        this.likes = data[0];
        this.editForm.setValue({
          'idGusto':this.likes?.idGusto,
          'nombreGusto':this.likes?.nombreGusto,
          'idTipoGusto':this.likes?.idTipoGusto,
        })
      })
    }
  }

  postEditLike(form:LikesI){
    this.api.putLikes(form).subscribe(data=>{
      console.log(data);
    })
  }
}