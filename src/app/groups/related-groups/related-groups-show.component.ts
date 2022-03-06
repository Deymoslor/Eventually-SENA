import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../see-groups/groups';

@Component({
  selector: 'app-related-groups-show',
  templateUrl: './related-groups-show.component.html',
  styleUrls: ['./related-groups-show.component.scss']
})
export class RelatedGroupsShowComponent implements OnInit {

  @Input() group!: Group;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  navigateToRelatedGroupDetails(): void {
    this.router.navigate(['groups', this.group.id], {
      relativeTo: this.route,
    })
  }

  share() {
    window.alert(this.group.id);
  }

  ngOnInit(): void {
  }

}
