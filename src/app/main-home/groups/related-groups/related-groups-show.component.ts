import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../see-groups/group';
import { SeeGroupsService } from "../../groups/see-groups/see-groups.service";

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
    invitadosTotales: new FormControl(''),
    imagen: new FormControl('')
  })

  httpLocalHost = 'http://localhost:8181'; //SENA
  // httpLocalHost = 'http://localhost'; //CASA
  constructor(
    private SeeGroupsService: SeeGroupsService,
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
    this.SeeGroupsService.getDetailsGroup(this.group.idGrupos).subscribe(data => {
      // console.log(data)

      this.listGroups = data[0];
        if (this.listGroups.imagen) {
          // element.imagen.replace('C:/xampp/htdocs', this.httpLocalHost);  
          this.GroupForm.setValue({
            idGrupos: this.listGroups.idGrupos,
            nombreGrupo: this.listGroups.nombreGrupo,
            descripcionGrupo: this.listGroups.descripcionGrupo,
            privacidadGrupo: this.listGroups.privacidadGrupo,
            invitadosTotales: this.listGroups.InvitadosTotales,
            imagen:  this.listGroups.imagen.replace('C:/xampp/htdocs', this.httpLocalHost)
          })
        }
        else{

        }
    })
  }

}
