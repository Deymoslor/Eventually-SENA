import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from "../../../../../dashboard/crud-users/service/userService.service";
import { AuthService } from 'src/app/core/service/auth.service';
import { ListaPersonasI } from 'src/app/dashboard/crud-users/ListaPersonasI.interface';
import { finalize, map } from 'rxjs';
import { ResponseI } from 'src/app/login-register/login/models/response.intarface';
import { AlertasService } from 'src/app/core/service/alertas.service';

@Component({
  selector: 'app-modal-source-users',
  templateUrl: './modal-source-users.component.html',
  styleUrls: ['./modal-source-users.component.scss']
})
export class ModalSourceUsersComponent implements OnInit {

  @Input() childMessage: number | undefined;
  public isLoading = false;
  public src: string | undefined;
  public personas$ = [];
  public personas! : ListaPersonasI[];

  constructor(private httpCllient: HttpClient,
              private userService:userService,
              private authService: AuthService,
              private router:Router,
              private activerouter:ActivatedRoute,
              private alertas:AlertasService,) { }

  filterPersona = '';

  ngOnInit(): void {
    let idGrupos = this.activerouter.snapshot.paramMap.get('id')
    console.log(idGrupos);
    this.userService.getSourcePerson(Number(idGrupos)).subscribe((data: any)=>{
      this.personas = data;
      console.log(this.personas);
    })
  }
  share(idPersonas, nombre): void {
    let idGrupos = this.activerouter.snapshot.paramMap.get('id')
    console.log(' la variable idGrupos: ', idGrupos);
    console.log(' la variable idPersonas: ', idPersonas);
    const newDetail = {idGrupos: Number(idGrupos), idPersonas: idPersonas}
    this.userService.PostRequestGroupPerson(newDetail).subscribe(data => {
      console.log(data);
      let respuesta:ResponseI = data;
          //Verificamos si la respuesta es exitosa.
          if(respuesta.status == 'ok'){
            this.alertas.showSuccess('has enviado una invitación a '+nombre+' ','Invitación exitosa');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }else{
            this.alertas.showError(respuesta.result.error_msg,'Problemas Encontrados');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
    }
    );
  }

}
