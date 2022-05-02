import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { YourGroupsDetailsComponent } from './your-groups/your-groups-details/your-groups-details.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  template: 'Mesage: <app-your-groups-details></app-your-groups-details>',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  @ViewChild(YourGroupsDetailsComponent) child;

  id: number | undefined;
  // id!: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.id = this.child;
    console.log(this.id);
    console.log(this.child);
  }

}



