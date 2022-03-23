import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Group } from '../modal-edit-groups/group.interface';
import { GroupsServiceService } from '../service/groups-service.service';

@Component({
  selector: 'app-modal-groups',
  templateUrl: './modal-groups.component.html',
  styleUrls: ['./modal-groups.component.scss']
})
export class ModalGroupsComponent implements OnInit {

  model: NgbDateStruct | undefined;
  date: {year: number; month: number;} | undefined;

  createGroupForm = new FormGroup({
    idGroups: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    InvitadosTotales: new FormControl(''),
    check: new FormControl(''),
    EstadosGrupo_idEstadosGrupo1: new FormControl(''),
  });

  constructor(private apiGroup:GroupsServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createGroupForm = this.fb.group({
      nombreGrupo: ['', [Validators.required, Validators.minLength(2)]],
      descripcionGrupo: ['', [Validators.required, Validators.minLength(5)]],
      privacidadGrupo: ['', Validators.required],
      InvitadosTotales: ['2', Validators.required],
      check: ['', Validators.required],
      EstadoGrupo_idEstadoGrupo1: ['2', Validators.required]
    })
  }

  postForm(form:Group){
    console.log(form);

    this.apiGroup.postGroup(form).subscribe(data => {
      console.log(data);
    })
    this.createGroupForm.reset();
  }

  guardar(){
    console.log('si');
  }

  clearForm(){
    this.createGroupForm.reset();
  }

}
