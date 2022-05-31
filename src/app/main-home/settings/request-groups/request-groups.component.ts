import { Component, OnInit } from '@angular/core';
import { RequestGroupsService } from './request-groups.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { RequestGroups } from './request-groups';
import { Console } from 'console';

@Component({
  selector: 'app-request-groups',
  templateUrl: './request-groups.component.html',
  styleUrls: ['./request-groups.component.scss']
})
export class RequestGroupsComponent implements OnInit {

  groups!: RequestGroups[];
  groupI!: RequestGroups;

  constructor(private RequestGroupsService: RequestGroupsService,
              private auth: AuthService) { }

  ngOnInit(): void {
    let persona = this.auth.desencriptar(localStorage.getItem('id'));
    this.RequestGroupsService.getRequestGroups(Number(persona)).subscribe(data => {
      console.log(data);

      this.groups = data;
    })
  }

  putEditDetail(group: Number, detail: Number, idPersona: Number, estadoPersona: Number){
    console.log('grupos: ', group, 'detalle: ', detail, 'el idPersona: ', idPersona, 'el Estado Persona: ', estadoPersona);
    const newDetail = {idGrupos: group, idDetalleGrupoPersonas: detail, idPersona: idPersona, estadoPersona_idEstadoPersona: estadoPersona}

    this.RequestGroupsService.putDetailsPersonGroup(newDetail).subscribe( data =>{
      console.log(data);
    })

    window.alert('la respuesta de la solicitúd se ha cargado exitosamente');

    // window.location.reload();
  }

}
