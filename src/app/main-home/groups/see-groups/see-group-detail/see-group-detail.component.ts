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

  // httpLocalHost = 'http://localhost:8181'; //SENA
  httpLocalHost = 'http://localhost'; //CASA

  constructor(
    private SeeGroupsService: SeeGroupsService,
    private promotedGroup: GroupsServiceService,
    private userService:userService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private likes: ApiService,
    ) { }

    group!: Group;
    idPersonas = this.auth.desencriptar(localStorage.getItem('id'));

  ngOnInit(): void {
    // const idGrupos = this.route.snapshot.paramMap.get('id');
    // this.group = this.SeeGroupsService.getDetailsGroup(Number(idGrupos)).subscribe(data =>{
    //   console.log(data);
    // })

    // if (this.group === null) {
    //   this.router.navigate(['group']);
    // }

    this.likes.getAllLikes(1).subscribe(data=>{
      console.log(data);

      this.likesI = data;
    })

    let idGrupos = this.route.snapshot.paramMap.get('id');
    console.log(idGrupos);
    // this.SeeGroupsService.getDetailsGroup(Number(idGrupos)).subscribe((data: any) =>{
    //   console.log(data);
    //   this.group = data[0];

    //   this.GroupForm.setValue({
    //     'idGrupos': this.group.idPersona,
    //     'nombreGrpo': this.group.nombreGrupo,
    //     'descripcionGrupo': this.group.descripcionGrupo,
    //     'privacidadGrupo': this.group.privacidadGrupo,
    //     'InvitadosTotales': this.group.InvitadosTotales,
    //     'gustos_idGusto': this.group.gustos_idGusto,
    //     'idPersona': this.group.idPersona,
    //     'imagen': this.group.imagen.replace('C:/xampp/htdocs', this.httpLocalHost),
    //   });
    // })
    this.promotedGroup.getSingleGroup(Number(idGrupos)).subscribe((data: any) => {
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
          'imagen': this.group.imagen.replace('C:/xampp/htdocs', this.httpLocalHost),
        });
      }
    })

    this.userService.getGroupPerson(Number(idGrupos)).subscribe((data: any)=>{
      this.personas = data;
      console.log(this.personas);
    })
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
    // console.log(this.GroupPersonC.idGrupos);
    // this.GroupPersonC.idGrupos = this.group.idGrupos;
    // this.GroupPersonC.idPersonas = Number(this.idPersonas);
    // console.log(this.GroupPersonC);
    const newDetail = {idGrupos: this.group.idGrupos, idPersonas: Number(this.idPersonas)}
    this.SeeGroupsService.postDetailsGroupPerson(newDetail).subscribe(data =>
      console.log(data)

    );
    window.alert('te has unido al grupo');
  }

}
