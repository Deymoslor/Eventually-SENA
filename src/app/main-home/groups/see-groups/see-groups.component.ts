import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { Group } from './group';
import { Groups } from './groups';
import { SeeGroupsService } from './see-groups.service';

@Component({
  selector: 'app-see-groups',
  templateUrl: './see-groups.component.html',
  styleUrls: ['./see-groups.component.scss']
})
export class SeeGroupsComponent implements OnInit {
  id!: number;
  groups!: Groups[];
  group!: Group;

  // GroupForm  = new FormGroup({
  //   idGrupos: new FormControl(''),
  //   nombreGrupo: new FormControl(''),
  //   descripcionGrupo: new FormControl(''),
  //   privacidadGrupo: new FormControl(''),
  //   invitadosTotales: new FormControl(''),
  //   gustos_idGusto: new FormControl(''),
  //   idPersona: new FormControl(''),
  //   imagen: new FormControl('')
  // })
  // get groups(): Group[] {
  //   const groups = this.SeeGroupsService.groups;

  //   if (this.route.snapshot.queryParamMap.get('orderBy') === 'id') {
  //     this.groups.sort((a, b) => a.id - b.id);
  //   }
  //   return groups;
  // }
  // orderBy$: Observable<string | null> = this.route.queryParamMap.pipe(
  //   map((queryParamMap) => queryParamMap.get('orderBy'))
  // );
  // httpLocalHost = 'http://localhost:8181'; //SENA
  httpLocalHost = 'http://localhost'; //CASA

  constructor(private SeeGroupsService: SeeGroupsService, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this.SeeGroupsService.getPromotedGroups(this.auth.desencriptar(localStorage.getItem('id'))).subscribe(data=>{
      console.log(data);

      this.groups = data;

      // this.GroupForm.setValue({
      //   'idGrupos': this.group.idPersona,
      //   'nombreGrpo': this.group.nombreGrupo,
      //   'descripcionGrupo': this.group.descripcionGrupo,
      //   'privacidadGrupo': this.group.privacidadGrupo,
      //   'invitadosTotales': this.group.invitadosTotales,
      //   'gustos_idGusto': this.group.gustos_idGusto,
      //   'idPersona': this.group.idPersona,
      //   'imagen': this.group.imagen.replace('C:/xampp/htdocs', this.httpLocalHost),
      // });
    })
  }

}
