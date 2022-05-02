import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { Group } from '../../../see-groups/group';
import { YourGroupsService } from '../../your-groups.service';

@Component({
  selector: 'app-modal-edit-groups',
  templateUrl: './modal-edit-groups.component.html',
  styleUrls: ['./modal-edit-groups.component.scss']
})
export class ModalEditGroupsComponent implements OnInit {

  @Input() childMessage!: number | undefined;
  likesI!: LikesI[];

  constructor(private activerouter:ActivatedRoute , private router:Router, private ApiGroup:YourGroupsService, private likes: ApiService) { }

  datesGroup!: Group;
  editForm = new FormGroup({
    idGrupos: new FormControl(''),
    nombreGrupo: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    InvitadosTotales: new FormControl(''),
    EstadosGrupo_idEstadosGrupo1: new FormControl(''),
    gustos_idGusto: new FormControl(''),
  })

  ngOnInit(): void {
    this.likes.getAllLikes(1).subscribe(data=>{

      this.likesI = data;
    })
  }
  ngOnChanges(): void {
    let idGrupos = this.activerouter.snapshot.paramMap.get('id')
    console.log(idGrupos);
    console.log(this.childMessage);
    if(Number(idGrupos) > 0){
      this.ApiGroup.getDetailsYourGroup(Number(idGrupos)).subscribe((data: any) =>{
        this.datesGroup =data[0];
        this.editForm.setValue({
          'idGrupos': this.datesGroup.idGrupos,
          'nombreGrupo': this.datesGroup.nombreGrupo,
          'descripcionGrupo': this.datesGroup.descripcionGrupo,
          'privacidadGrupo': this.datesGroup.privacidadGrupo,
          'gustos_idGusto': this.datesGroup.gustos_idGusto
        });
        console.log(this.editForm.get('idGrupos')?.value);
      });
    }else{
      console.log("no se pudo :(");
    };

    // let eventId = this.activeRouter.snapshot.paramMap.get('idE');
    // this.api.getSingleEvent(eventId).subscribe((data: any) =>{
    //   this.dataEvent =data[0];
    //   this.editFormIn.setValue({
    //     'idEvento': this.dataEvent.idEvento,
    //     'nombreEvento': this.dataEvent.nombreEvento,
    //     'descripcionEvento': this.dataEvent.descripcionEvento,
    //     'fechaEvento': this.dataEvent.fechaEvento,
    //     'tipoEvento': this.dataEvent.tipoEvento,
    //     'participantesTotales': this.dataEvent.participantesTotales,
    //     'estadoEvento': this.dataEvent.estadoEvento
    //   })
    // })
  }

  postEditForm(form: Group)
  {
    console.log(form);
    this.ApiGroup.putGroup(form).subscribe( data =>{
      console.log(data);
    })
  }
  refresh(): void { window.location.reload(); }

}
