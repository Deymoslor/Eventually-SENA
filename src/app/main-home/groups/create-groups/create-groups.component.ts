import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Group } from '../see-groups/group';
import { YourGroupsService } from '../your-groups/your-groups.service';

@Component({
  selector: 'app-create-groups',
  templateUrl: './create-groups.component.html',
  styleUrls: ['./create-groups.component.scss']
})
export class CreateGroupsComponent implements OnInit {

  share() {
    window.alert('The product has been shared!');
  }

  createYourGroupForm = new FormGroup({
    idGroups: new FormControl(''),
    nombreGrupo: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    check: new FormControl(''),
  });

  // swal("Oops!", "Something went wrong on the page!", "error");

  constructor(private create:YourGroupsService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createYourGroupForm = this.fb.group({
      nombreGrupo: ['', [Validators.required, Validators.minLength(2)]],
      descripcionGrupo: ['', [Validators.required, Validators.minLength(5)]],
      privacidadGrupo: ['', Validators.required],
      check: ['', Validators.required]
    })
  }

  postForm(form:Group){
    console.log(form);

    this.create.postYourGroup(form).subscribe(data => {
      console.log(data);
    })
    this.createYourGroupForm.reset();
  }

  guardar(){
    console.log('si');
  }

  clearForm(){
    this.createYourGroupForm.reset();
  }

}
