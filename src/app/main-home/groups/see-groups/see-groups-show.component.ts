import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { updatePersonaI } from '../../settings/updatePersonaI';
import { GroupPerson } from './GroupPerson';
import { Groups } from './groups';
import { SeeGroupsService } from "./see-groups.service";
import { AuthService } from 'src/app/core/service/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GroupsServiceService } from 'src/app/dashboard/crud-groups/service/groups-service.service';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-see-groups-show',
  templateUrl: './see-groups-show.component.html',
  styleUrls: ['./see-groups-show.component.scss'],
})
export class SeeGroupsShowComponent implements OnInit{
  @Input() group!: Groups;
  listGroups!: Groups;
  idPersona!:updatePersonaI;
  GroupPersonC!:GroupPerson;
  idPersonas = this.auth.desencriptar(localStorage.getItem('id'));

  // GroupForm  = new FormGroup({
  //   'idGrupos': new FormControl(''),
  //   'nombreGrupo': new FormControl(''),
  //   'descripcionGrupo': new FormControl(''),
  //   'privacidadGrupo': new FormControl(''),
  //   'InvitadosTotales': new FormControl(''),
  //   'imagen': new FormControl('')
  // })

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
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService,
    private sanitizator: DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log(this.group.idGrupos);
    // this.SeeGroupsService.getPromotedGroups(this.auth.desencriptar(localStorage.getItem('id'))).subscribe(data=>{
    //   if (this.group.imagen) {
    //     console.log(this.group.imagen);
    //     // this.sanitizator.bypassSecurityTrustStyle(this.group.imagen)
    //     // this.group.imagen.replace('C:/xampp/htdocs', this.httpLocalHost);
    //   }else{
    //     this.group.imagen = '';
    //   }
    // })

    // this.SeeGroupsService.getDetailsGroup(this.group.idGrupos).subscribe(data => {
    //   console.log(data)

    //   this.listGroups = data[0];
    //     if (this.listGroups.imagen) {
    //       this.GroupForm.setValue({
    //         'idGrupos': this.listGroups.idGrupos,
    //         'nombreGrupo': this.listGroups.nombreGrupo,
    //         'descripcionGrupo': this.listGroups.descripcionGrupo,
    //         'privacidadGrupo': this.listGroups.privacidadGrupo,
    //         'InvitadosTotales': this.listGroups.InvitadosTotales,
    //         'imagen':  this.listGroups.imagen.replace('C:/xampp/htdocs', this.httpLocalHost)
    //       })
    //     }
    //     else{
    //       console.log("no me esta sirviendo");
    //     }
    // })

    this.promotedGroup.getSingleGroup(this.group.idGrupos).subscribe((data: any) => {
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
  }

  navigateToGroupDetails(): void {
    this.router.navigate(['show', this.group.idGrupos], {
      relativeTo: this.route,
    });
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
    window.alert('se ha enviado la solicitúd de unirse');
  }


}
