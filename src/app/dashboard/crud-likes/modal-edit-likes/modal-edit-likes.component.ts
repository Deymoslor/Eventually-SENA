import { Component, Input, OnInit } from '@angular/core';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

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

  public likes!:LikesI;

  editForm  = new FormGroup({
    nombreGusto:new FormControl(''),
    idGusto:new FormControl(''),
    // idtipoGusto:new FormControl(''),
  })

  // typeslikes?:TypesLikesI[];

  ngOnInit(): void {
    // this.api.getAllTypesLikes(1).subscribe(data => {
    //   console.log(data)
    //   this.typeslikes=data})
  }

  ngOnChanges(): void {
    if(this.childMessage > 0){
      this.api.getSingleLikes(this.childMessage).subscribe((data:any)=>{
        this.likes = data[0];
        // console.log(this.likes);
        this.editForm.setValue({
          'idGusto' : this.likes.idGusto,
          'nombreGusto' : this.likes.nombreGusto
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
      // console.log(data);
      window.location.reload();
    })
  }
}
