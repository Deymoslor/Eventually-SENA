import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../see-groups/group';
import { SeeGroupsService } from "../../groups/see-groups/see-groups.service";
import { GlobalConstants } from 'src/app/global-constants';
import { GroupsServiceService } from 'src/app/dashboard/crud-groups/service/groups-service.service';

@Component({
  selector: 'app-related-groups-show',
  templateUrl: './related-groups-show.component.html',
  styleUrls: ['./related-groups-show.component.scss']
})
export class RelatedGroupsShowComponent implements OnInit {

  @Input() group!: Group;
  listGroups!: Group;

  GroupForm  = new FormGroup({
    idGrupos: new FormControl(''),
    nombreGrupo: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    InvitadosTotales: new FormControl(''),
    gustos_idGusto: new FormControl(''),
    imagen: new FormControl('')
  })

  httpLocalHost = 'http://localhost:8181'; //SENA
  // httpLocalHost = 'http://localhost'; //CASA
  constructor(
    private SeeGroupsService: SeeGroupsService,
    private promotedGroup: GroupsServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  navigateToRelatedGroupDetails(): void {
    // this.router.navigate(['groups', this.group.idGrupos], {
    //   relativeTo: this.route,
    // })
  }

  share() {
    window.alert(this.group.idGrupos);
  }

  ngOnInit(): void {
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

}
