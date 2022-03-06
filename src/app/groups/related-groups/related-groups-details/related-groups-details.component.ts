import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { share } from 'rxjs';
import { Group } from '../../see-groups/groups';
import { RelatedGroupsService } from "../related-groups.service";

@Component({
  selector: 'app-related-groups-details',
  templateUrl: './related-groups-details.component.html',
  styleUrls: ['./related-groups-details.component.scss']
})
export class RelatedGroupsDetailsComponent implements OnInit {
  group!: Group | null;
  constructor(
    private RelatedGroupsService: RelatedGroupsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const groupId = this.route.snapshot.paramMap.get('id');
    this.group = this.RelatedGroupsService.getGroup(Number(groupId));

    if (this.group === null) {
      this.router.navigate(['group']);
    }
  }
}
