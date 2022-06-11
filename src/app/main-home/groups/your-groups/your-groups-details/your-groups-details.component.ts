import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventI } from 'src/app/models/event.interface';
import { LikesI } from 'src/app/models/likes';
import { ApiService } from 'src/app/services/api.service';
import { Group } from '../../see-groups/group';
import { YourGroupsService } from "../your-groups.service";
import { RelatedGroupsService } from '../../related-groups/related-groups.service';
import { GroupsServiceService } from 'src/app/dashboard/crud-groups/service/groups-service.service';
import { userService } from "../../../../dashboard/crud-users/service/userService.service";
import { ListaPersonasI } from 'src/app/dashboard/crud-users/ListaPersonasI.interface';
import { AuthService } from 'src/app/core/service/auth.service';
import { GroupPersonDetails } from './group-person-details';
import { GlobalConstants } from 'src/app/global-constants';
import { RequestGroups } from 'src/app/main-home/settings/request-groups/request-groups';
import { RequestGroupsService } from "src/app/main-home/settings/request-groups/request-groups.service";
// import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-your-groups-details',
  templateUrl: './your-groups-details.component.html',
  styleUrls: ['./your-groups-details.component.scss']
})
export class YourGroupsDetailsComponent implements OnInit {

  id: number | undefined;
  childMessage: number | undefined;
  likesI!: LikesI[];
  public personas! : GroupPersonDetails[];
  manager!: GroupPersonDetails;
  personaId = this.auth.desencriptar(localStorage.getItem('id'));
  requestGroups!: RequestGroups[];
  requestGroupI!: RequestGroups;

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
  group!: Group;
  constructor(
    private RequestGroupsService: RequestGroupsService,
    private YourGroupsService: YourGroupsService,
    private relatedService : RelatedGroupsService,
    private promotedGroup: GroupsServiceService,
    private EventService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private api: ApiService,
    private userService:userService,
    private likes: ApiService,
    private auth: AuthService,
  ) { }

  event!: EventI | null;

  closeResult = '';

  ngOnInit(): void {
    let idGrupos = this.route.snapshot.paramMap.get('id');
    console.log(idGrupos);
    this.userService.getGroupPerson(Number(idGrupos)).subscribe((data: any)=>{
      this.personas = data;
      console.log(this.personas);
    })
    this.likes.getAllLikes(1).subscribe(data=>{

      this.likesI = data;
    })
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
          'imagen': this.group.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost),
        });
      }
    })

    this.userService.getManagerGroup(this.personaId,Number(idGrupos)).subscribe((data: any) => {
      this.manager = data[0];
      console.log(this.manager);
    })

    this.RequestGroupsService.getRequestGuests(Number(idGrupos)).subscribe(data => {
      console.log(data);

      this.personas = data;
    })

    if (this.group === null) {
      this.router.navigate(['group']);
    }

  }

  modalOpen(content:any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  modalOpen2(content:any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason2(reason)}`;
    });
  }

  private getDismissReason2(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  editarGroup(id:number | undefined){
    this.id = this.childMessage;
    console.log('el id del fuckin grupo: ', this.childMessage);
  }
  datesGroup!: Group;
  editForm = new FormGroup({
    idGrupos: new FormControl(''),
    nombreGrupo: new FormControl(''),
    descripcionGrupo: new FormControl(''),
    privacidadGrupo: new FormControl(''),
    // InvitadosTotales: new FormControl(''),
    // EstadosGrupo_idEstadosGrupo1: new FormControl(''),
    gustos_idGusto: new FormControl(''),
  })

  ngOnChanges(): void {
    let idGrupos = this.route.snapshot.paramMap.get('id')
    console.log(idGrupos);
    console.log(this.childMessage);
    if(Number(idGrupos) > 0){
      this.YourGroupsService.getDetailsYourGroup(Number(idGrupos)).subscribe((data: any) =>{
        this.datesGroup =data[0];
        this.editForm.setValue({
          'idGrupos': this.datesGroup.idGrupos,
          'nombreGrupo': this.datesGroup.nombreGrupo,
          'descripcionGrupo': this.datesGroup.descripcionGrupo,
          'privacidadGrupo': this.datesGroup.privacidadGrupo,
          'gustos_idGusto': this.datesGroup.gustos_idGusto
        });
        console.log(this.editForm.get('idGrupos')?.value);
      });
    }else{
      console.log("no se pudo :(");
    };

    // let eventId = this.activeRouter.snapshot.paramMap.get('idE');
    // this.api.getSingleEvent(eventId).subscribe((data: any) =>{
    //   this.dataEvent =data[0];
    //   this.editFormIn.setValue({
    //     'idEvento': this.dataEvent.idEvento,
    //     'nombreEvento': this.dataEvent.nombreEvento,
    //     'descripcionEvento': this.dataEvent.descripcionEvento,
    //     'fechaEvento': this.dataEvent.fechaEvento,
    //     'tipoEvento': this.dataEvent.tipoEvento,
    //     'participantesTotales': this.dataEvent.participantesTotales,
    //     'estadoEvento': this.dataEvent.estadoEvento
    //   })
    // })
  }

  postEditForm(form: Group)
  {
    console.log(form);
    this.YourGroupsService.putGroup(form).subscribe( data =>{
      console.log(data);
    })
  }
  refresh(): void { window.location.reload(); }

  putEditDetail(group: Number, detail: Number, idPersona: Number, estadoPersona: Number){
    console.log('grupos: ', group, 'detalle: ', detail, 'el idPersona: ', idPersona, 'el Estado Persona: ', estadoPersona);
    const newDetail = {idGrupos: group, idDetalleGrupoPersonas: detail, idPersona: idPersona, estadoPersona_idEstadoPersona: estadoPersona}

    this.RequestGroupsService.putDetailsPersonGroup(newDetail).subscribe( data =>{
      console.log(data);
    })

    window.alert('se ha eliminado el invitado exitosamente');

    window.location.reload();
  }
}
