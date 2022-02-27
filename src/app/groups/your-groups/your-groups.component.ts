import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../see-groups/groups';
import { YourGroupsService } from './your-groups.service';

@Component({
  selector: 'app-your-groups',
  templateUrl: './your-groups.component.html',
  styleUrls: ['./your-groups.component.scss']
})
export class YourGroupsComponent implements OnInit {
  get groups(): Group[] {
    const groups = this.YourGroupsService.groups;

    if (this.route.snapshot.queryParamMap.get('orderBy') === 'id') {
      groups.sort((a, b) => a.id - b.id);
    }

    return groups;
  }
  constructor(
    private YourGroupsService: YourGroupsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
