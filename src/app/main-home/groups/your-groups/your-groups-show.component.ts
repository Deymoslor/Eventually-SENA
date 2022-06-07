import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../see-groups/group';
import { YourGroupsDetailsComponent } from './your-groups-details/your-groups-details.component';
import { SeeGroupsService } from "../../groups/see-groups/see-groups.service";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-your-groups-show',
  templateUrl: './your-groups-show.component.html',
  styleUrls: ['./your-groups-show.component.scss']
})
export class YourGroupsShowComponent implements OnInit {
  @Input() group!: Group;
  listGroups!: Group;
  @Output() miMessage = new EventEmitter<number>();

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

  navigateToYourGroupDetails(): void {
    this.router.navigate(['groups', this.group.idGrupos], {
      relativeTo: this.route
    })
  }

  UnirLosParametroas(id: number){
    this.miMessage.emit(id);
    console.log(this.miMessage.emit(id));
  }
}
