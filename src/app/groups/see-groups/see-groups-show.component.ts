import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from './groups';
import { SeeGroupsService } from "./see-groups.service";

@Component({
  selector: 'app-see-groups-show',
  templateUrl: './see-groups-show.component.html',
  styleUrls: ['./see-groups-show.component.scss'],
})
export class SeeGroupsShowComponent {
  @Input() group!: Group;
  constructor(
    private SeeGroupsService: SeeGroupsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  navigateToGroupDetails(): void {
    this.router.navigate(['show', this.group.id], {
      relativeTo: this.route,
    });
  }

  share() {
    window.alert('se ha enviado la solicitúd de unirse');
  }

}
