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
  public personas! : ListaPersonasI[];

  group!: Group;
  constructor(
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
    private likes: ApiService
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
    // this.relatedService.getDetailsRelatedGroup(Number(idGrupos)).subscribe((data: any) => {
    //     console.log(data);
    //     this.group = data[0];
    //   })
    // this.YourGroupsService.getDetailsYourGroup(Number(idGrupos)).subscribe((data: any) => {
    //   console.log(data);
    //   this.group = data[0];
    // })
    this.promotedGroup.getSingleGroup(Number(idGrupos)).subscribe((data: any) => {
      console.log(data);
      this.group = data[0];
    })

    if (this.group === null) {
      this.router.navigate(['group']);
    }

    // this.EventService.getSigleEventGroup(Number(idGrupos)).subscribe((data: any) => {
    //   console.log(data);
    //   this.event = data[0];
    // })
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
}
