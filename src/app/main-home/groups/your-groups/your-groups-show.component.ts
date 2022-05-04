import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../see-groups/group';
import { YourGroupsDetailsComponent } from './your-groups-details/your-groups-details.component';

@Component({
  selector: 'app-your-groups-show',
  templateUrl: './your-groups-show.component.html',
  styleUrls: ['./your-groups-show.component.scss']
})
export class YourGroupsShowComponent implements AfterViewInit {
  @Input() group!: Group;
  @Output() miMessage = new EventEmitter<number>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {
  }

  navigateToYourGroupDetails(): void {
    this.router.navigate(['groups', this.group.idGrupos], {
      relativeTo: this.route
    })
  }

  UnirLosParametroas(id: number){
    this.miMessage.emit(id);
    console.log(this.miMessage.emit(id));
  }
}
