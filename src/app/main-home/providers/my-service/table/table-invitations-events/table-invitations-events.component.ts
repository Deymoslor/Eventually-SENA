import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceEventI } from '../../../models/serviceEvent.interface';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-table-invitations-events',
  templateUrl: './table-invitations-events.component.html',
  styleUrls: ['./table-invitations-events.component.scss']
})
export class TableInvitationsEventsComponent implements OnInit {

  accepted: boolean = false;
  dataServiceEventProv!: ServiceEventI[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllServiceEventProv(1).subscribe(data =>{
      console.log(data);
      data.forEach(key => {
        if (key.estadoInvitacion == 1) {
          this.accepted = true;
        }
      });
      this.dataServiceEventProv = data;
    })
  }

  changeStateServiceProvA(form:ServiceEventI){
    console.log(form);
      form.estadoInvitacion = 1;
    this.api.putServiceEventProv(form).subscribe(data=>{
      console.log(data);
    });
    this.refresh();
}

  changeStateServiceProvD(form:ServiceEventI){
    console.log(form);
      form.estadoInvitacion = 2;
    this.api.putServiceEventProv(form).subscribe(data=>{
      console.log(data);
    });
    this.refresh();
  }

refresh(){
  window.location.reload();
}

}
