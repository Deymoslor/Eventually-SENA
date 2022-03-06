import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../../see-groups/groups';
import { YourGroupsService } from "../your-groups.service";

@Component({
  selector: 'app-your-groups-details',
  templateUrl: './your-groups-details.component.html',
  styleUrls: ['./your-groups-details.component.scss']
})
export class YourGroupsDetailsComponent implements OnInit {
  group!: Group | null;
  constructor(
    private YourGroupsService: YourGroupsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const groupId = this.route.snapshot.paramMap.get('id');
    this.group = this.YourGroupsService.getGroup(Number(groupId));

    if (this.group === null) {
      this.router.navigate(['group']);
    }
  }

}
