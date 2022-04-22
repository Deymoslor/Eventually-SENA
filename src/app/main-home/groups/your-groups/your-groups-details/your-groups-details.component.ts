import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventI } from 'src/app/models/event.interface';
import { Group } from '../../see-groups/group';
import { YourGroupsService } from "../your-groups.service";
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-your-groups-details',
  templateUrl: './your-groups-details.component.html',
  styleUrls: ['./your-groups-details.component.scss']
})
export class YourGroupsDetailsComponent implements OnInit {

  

  group!: Group | null;
  constructor(
    private YourGroupsService: YourGroupsService,
    private EventService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private api: ApiService
  ) { }

  event!: EventI | null;

  closeResult = '';

  ngOnInit(): void {

    

    let idGrupos = this.route.snapshot.paramMap.get('id');
    console.log(idGrupos);
    this.YourGroupsService.getDetailsYourGroup(Number(idGrupos)).subscribe((data: any) => {
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


}
