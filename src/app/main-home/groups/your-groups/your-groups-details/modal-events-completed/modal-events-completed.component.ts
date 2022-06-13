import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { userService } from 'src/app/dashboard/crud-users/service/userService.service';
import { ListEventsI } from 'src/app/models/listEvents.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { GroupPersonDetails } from '../group-person-details';

@Component({
  selector: 'app-modal-events-completed',
  templateUrl: './modal-events-completed.component.html',
  styleUrls: ['./modal-events-completed.component.scss']
})
export class ModalEventsCompletedComponent implements OnInit {

  finishedEvents!: ListEventsI[];
  personaId = this.auth.desencriptar(localStorage.getItem('id'));
  manager!: GroupPersonDetails;

  constructor(
    private router:Router,
    private activerouter:ActivatedRoute,
    private apiService:ApiService,
    private auth:AuthService,
    private userService:userService
  ) { }

  ngOnInit(): void {
    let idGrupos = this.activerouter.snapshot.paramMap.get('id')
    console.log(idGrupos);
    this.apiService.getListFinishEvents(Number(idGrupos)).subscribe(data =>{
      this.finishedEvents = data;
      console.log(this.finishedEvents);
    })
    this.userService.getManagerGroup(this.personaId,Number(idGrupos)).subscribe((data: any) => {
      this.manager = data[0];
      console.log(this.manager);
    })
  }

}
