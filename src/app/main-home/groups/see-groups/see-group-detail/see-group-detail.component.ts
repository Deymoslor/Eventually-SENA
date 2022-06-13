import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { Group } from '../group';
import { SeeGroupsService } from '../see-groups.service';
import { userService } from "../../../../dashboard/crud-users/service/userService.service";
import { ListaPersonasI } from 'src/app/dashboard/crud-users/ListaPersonasI.interface';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { GroupsServiceService } from 'src/app/dashboard/crud-groups/service/groups-service.service';
import { GlobalConstants } from 'src/app/global-constants';
import { AlertasService } from 'src/app/core/service/alertas.service';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';
import { ResponseIde } from '../response';

@Component({
  selector: 'app-see-group-detail',
  templateUrl: './see-group-detail.component.html',
  styleUrls: ['./see-group-detail.component.scss']
})
export class SeeGroupDetailComponent implements OnInit {

  @Input() childMessage!: number;
  public personas! : ListaPersonasI[];
  likesI!: LikesI[];

  GroupForm  = new FormGroup({
    idGrupos: new FormControl(''),
    nombreGrupo: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    InvitadosTotales: new FormControl(''),
    gustos_idGusto: new FormControl(''),
    imagen: new FormControl('')
  })

  constructor(
    private SeeGroupsService: SeeGroupsService,
    private promotedGroup: GroupsServiceService,
    private userService:userService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private likes: ApiService,
    private alertas:AlertasService,
    ) { }

    group!: Group;
    idGrupos = this.route.snapshot.paramMap.get('id');
    idPersonas = this.auth.desencriptar(localStorage.getItem('id'));

  ngOnInit(): void {

    this.likes.getAllLikes(1).subscribe(data=>{
      console.log(data);

      this.likesI = data;
    })
    console.log(this.idGrupos);
    this.promotedGroup.getSingleGroup(Number(this.idGrupos)).subscribe((data: any) => {
      console.log(data);
      this.group = data[0];
      if (this.group === null) {
        console.log('esa vaina no sirvio');
      } else {
        this.GroupForm.setValue({
          'idGrupos': this.group.idGrupos,
          'nombreGrupo': this.group.nombreGrupo,
          'descripcionGrupo': this.group.descripcionGrupo,
          'privacidadGrupo': this.group.privacidadGrupo,
          'InvitadosTotales': this.group.InvitadosTotales,
          'gustos_idGusto': this.group.gustos_idGusto,
          'imagen': this.group.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost),
        });
      }
    })

    this.userService.getGroupPerson(Number(this.idGrupos),this.idPersonas).subscribe((data: any)=>{
      this.personas = data;
      console.log(this.personas);
    })

    console.log(' la variable idGrupos: ', this.group.idGrupos);
  }

  ngOnChanges(): void {
    // console.log(this.childMessage);
    // if (this.childMessage > 0) {
    //   this.SeeGroupsService.getDetailsGroup(this.childMessage);
    // } else {

    // }

  }

  share(): void {
    console.log(' la variable idGrupos: ', this.group.idGrupos);
    console.log(' la variable idPersonas: ', this.idPersonas);
    const newDetail = {idGrupos: this.group.idGrupos, idPersonas: Number(this.idPersonas)}
    this.SeeGroupsService.postDetailsGroupPerson(newDetail).subscribe(data =>{
      console.log(data);
      let respuesta:ResponseI = data;
      //Verificamos si la respuesta es exitosa.
      if(respuesta.status == 'ok'){
        this.SeeGroupsService.putGroupPerson(newDetail).subscribe(data1 =>{
          console.log(data1);
          let respuesta2:ResponseIde = data1;
          if (respuesta2.status == 'ok') {
            this.alertas.showSuccess('Te has unido al grupo','Petición exitosa');
            this.router.navigate(['main/groups/related-groups/',this.idGrupos]);
          }else{
            this.alertas.showError(respuesta2.result.error_msg,'Problemas de Actualización');
            window.location.reload();
          }
        })
      }else{
        this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
        window.location.reload();
      }
    });
    // window.alert('te has unido al grupo');
  }

}
