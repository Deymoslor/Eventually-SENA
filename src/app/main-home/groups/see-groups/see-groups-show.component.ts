import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { updatePersonaI } from '../../settings/updatePersonaI';
import { GroupPerson } from './GroupPerson';
import { Groups } from './groups';
import { SeeGroupsService } from "./see-groups.service";

@Component({
  selector: 'app-see-groups-show',
  templateUrl: './see-groups-show.component.html',
  styleUrls: ['./see-groups-show.component.scss'],
})
export class SeeGroupsShowComponent{
  @Input() group!: Groups;
  idPersona!:updatePersonaI;
  GroupPersonC!:GroupPerson;
  idPersonas = localStorage.getItem('id');

  constructor(
    private SeeGroupsService: SeeGroupsService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

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
