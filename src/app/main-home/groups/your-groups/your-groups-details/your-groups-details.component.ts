import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventI } from 'src/app/models/event.interface';
import { Group } from '../../see-groups/group';
import { YourGroupsService } from "../your-groups.service";
import { ApiService } from '../../../../services/api/api.service';

@Component({
  selector: 'app-your-groups-details',
  templateUrl: './your-groups-details.component.html',
  styleUrls: ['./your-groups-details.component.scss']
})
export class YourGroupsDetailsComponent implements OnInit {

  createEventForm = new FormGroup({
    idEvento: new FormControl(''),
    nombreEvento: new FormControl(''),
    descripcionEvento: new FormControl(''),
    estadoEvento: new FormControl(''),
    fechaEvento: new FormControl(''),
    tipoEvento: new FormControl(''),
    ParticipantesTotales: new FormControl(''),
    check: new FormControl(''),
    Grupos_idGrupos: new FormControl(''),
  });

  group!: Group | null;
  constructor(
    private YourGroupsService: YourGroupsService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private api: ApiService
  ) { }

  closeResult = '';

  ngOnInit(): void {

    this.createEventForm = this.fb.group({
      nombreEvento: ['', [Validators.required, Validators.minLength(2)]],
      tipoEvento: ['', Validators.required],
      descripcionEvento: ['', [Validators.required, Validators.minLength(5)]],
      fechaEvento: ['', Validators.required],
      ParticipantesTotales: ['2', Validators.required],
      check: ['', Validators.required],
      // cellPhone: this.getPhoneFromGroup(),
      // homePhone: this.getPhoneFromGroup(),
      // email: new FormControl('', [Validators.email]),
    });

    const groupId = this.route.snapshot.paramMap.get('id');
    this.group = this.YourGroupsService.getGroup(Number(groupId));

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


  //Modal Create Event
  postForm(form:EventI){
    console.log(form);


    this.api.postEvent(form).subscribe( data => {
      console.log(data);
    })
    this.createEventForm.reset();
  }
}
