import { Component, OnInit } from '@angular/core';
import { RequestGroupsService } from './request-groups.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { RequestGroups } from './request-groups';
import { Console } from 'console';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';
import { AlertasService } from 'src/app/core/service/alertas.service';
import { Router } from '@angular/router';
import { SeeGroupsService } from '../../groups/see-groups/see-groups.service';

@Component({
  selector: 'app-request-groups',
  templateUrl: './request-groups.component.html',
  styleUrls: ['./request-groups.component.scss']
})
export class RequestGroupsComponent implements OnInit {

  groups!: RequestGroups[];
  groupI!: RequestGroups;

  constructor(private RequestGroupsService: RequestGroupsService,
              private SeeGroupsService: SeeGroupsService,
              private auth: AuthService,
              private alertas:AlertasService,
              private router:Router,) { }

  ngOnInit(): void {
    let persona = this.auth.desencriptar(localStorage.getItem('id'));
    this.RequestGroupsService.getRequestGroups(Number(persona)).subscribe(data => {
      console.log(data);

      this.groups = data;
    })
  }

  putEditDetail(group: number, detail: number, idPersona: number, estadoPersona: number){
    console.log('grupos: ', group, 'detalle: ', detail, 'el idPersona: ', idPersona, 'el Estado Persona: ', estadoPersona);
    const newDetail = {idGrupos: group, idDetalleGrupoPersonas: detail, idPersona: idPersona, estadoPersona_idEstadoPersona: estadoPersona}
    const newDetail2 = {idGrupos: group, idPersonas: idPersona}
    this.RequestGroupsService.putDetailsPersonGroup(newDetail).subscribe( data =>{
      console.log(data);
      let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.SeeGroupsService.putGroupPerson(newDetail2).subscribe(data1 =>{
              console.log(data1);
              let respuesta2:ResponseI = data1;
              if (respuesta2.status == 'ok') {
                this.alertas.showSuccess('has aceptado la invitación','Invitación exitosa');
                this.router.navigate(['main/groups/related-groups/',group]);
              }else{
                this.alertas.showError(respuesta2.result.error_msg,'Problemas de Actualización');
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
              }
            })
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
    })
  }

}
