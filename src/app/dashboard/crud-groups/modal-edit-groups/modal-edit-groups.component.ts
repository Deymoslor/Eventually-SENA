import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Group } from "./group.interface";
import { GroupsServiceService } from "../service/groups-service.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-modal-edit-groups',
  templateUrl: './modal-edit-groups.component.html',
  styleUrls: ['./modal-edit-groups.component.scss']
})
export class ModalEditGroupsComponent implements OnInit {

  @Input() childMessage!: number;

  constructor(private activerouter:ActivatedRoute , private router:Router, private ApiGroup:GroupsServiceService) { }

  datesGroup!: Group;
  editForm = new FormGroup({
    idGrupos: new FormControl(''),
    nombreGrupo: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    InvitadosTotales: new FormControl(''),
    EstadosGrupo_idEstadosGrupo1: new FormControl(''),
  })

  ngOnInit(): void {
    // this.activerouter.snapshot.paramMap.get('id')
  }

  ngOnChanges(): void {
    console.log(this.childMessage);
    if(this.childMessage > 0){
      this.ApiGroup.getSingleGroup(this.childMessage).subscribe((data: any) =>{
        this.datesGroup =data[0];
        this.editForm.setValue({
          'idGrupos': this.datesGroup.idGrupos,
          'nombreGrupo': this.datesGroup.nombreGrupo,
          'descripcionGrupo': this.datesGroup.descripcionGrupo,
          'privacidadGrupo': this.datesGroup.privacidadGrupo,
          'InvitadosTotales': this.datesGroup.InvitadosTotales,
          'EstadosGrupo_idEstadosGrupo1': this.datesGroup.EstadosGrupo_idEstadosGrupo1
        });
      });
    };
  }

  postEditForm(form: Group)
  {
    console.log(form);
    this.ApiGroup.putGroup(form).subscribe( data =>{
      console.log(data);
    })
  }
  refresh(): void { window.location.reload(); }

  switchStateGroup(num: number){
    if (num != 1) {
      console.log("hola soy el num " + num);
      this.editForm.setValue({
        'idGrupos': this.datesGroup.idGrupos,
        'nombreGrupo': this.datesGroup.nombreGrupo,
        'descripcionGrupo': this.datesGroup.descripcionGrupo,
        'privacidadGrupo': this.datesGroup.privacidadGrupo,
        'InvitadosTotales': this.datesGroup.InvitadosTotales,
        'EstadosGrupo_idEstadosGrupo1': 1
      })
    } else if (num == 1) {
      console.log("hola soy el num " + num);
      this.editForm.setValue({
        'idGrupos': this.datesGroup.idGrupos,
        'nombreGrupo': this.datesGroup.nombreGrupo,
        'descripcionGrupo': this.datesGroup.descripcionGrupo,
        'privacidadGrupo': this.datesGroup.privacidadGrupo,
        'InvitadosTotales': this.datesGroup.InvitadosTotales,
        'EstadosGrupo_idEstadosGrupo1': 2
      })
    }
  }
}
