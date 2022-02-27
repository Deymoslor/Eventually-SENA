import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../see-groups/groups';
import { RelatedGroupsService } from './related-groups.service';

@Component({
  selector: 'app-related-groups',
  templateUrl: './related-groups.component.html',
  styleUrls: ['./related-groups.component.scss']
})
export class RelatedGroupsComponent implements OnInit {
 get groups(): Group[] {
  const groups = this.RelatedGroupsService.groups;

  if (this.route.snapshot.queryParamMap.get('orderBy') === 'id') {
    groups.sort((a, b) => a.id - b.id);
  }
  return groups;
 }

  constructor(private RelatedGroupsService: RelatedGroupsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
