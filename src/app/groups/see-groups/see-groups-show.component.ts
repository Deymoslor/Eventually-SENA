import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from './groups';

@Component({
  selector: 'app-see-groups-show',
  templateUrl: './see-groups-show.component.html',
  styleUrls: ['./see-groups-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeeGroupsShowComponent implements OnInit {
  @Input() group!: Group;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigateToGroupDetails(): void {
    this.router.navigate(['groups', this.group.id], {
      relativeTo: this.route,
    });
  }

}
