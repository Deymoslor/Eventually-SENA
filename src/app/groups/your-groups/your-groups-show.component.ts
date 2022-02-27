import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../see-groups/groups';

@Component({
  selector: 'app-your-groups-show',
  templateUrl: './your-groups-show.component.html',
  styleUrls: ['./your-groups-show.component.scss']
})
export class YourGroupsShowComponent implements OnInit {
  @Input() group!: Group;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigateToGroupDetails(): void {
    this.router.navigate(['groups', this.group.id], {
      relativeTo: this.route
    })
  }
}
