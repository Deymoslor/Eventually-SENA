import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groups } from '../see-groups/groups';
import { RelatedGroupsService } from './related-groups.service';

@Component({
  selector: 'app-related-groups',
  templateUrl: './related-groups.component.html',
  styleUrls: ['./related-groups.component.scss']
})
export class RelatedGroupsComponent implements OnInit {
  groups!: Groups[];
//   get groups(): Groups[] {
//   const groups = this.RelatedGroupsService.getRelatedGroups;

//   if (this.route.snapshot.queryParamMap.get('orderBy') === 'id') {
//     groups.sort((a, b) => a.idGrupos - b.idGrupos);
//   }
//   return groups;
//  }

  constructor(private RelatedGroupsService: RelatedGroupsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.RelatedGroupsService.getRelatedGroups(1).subscribe(data => {
      console.log(data);

      this.groups = data;
    })
  }

}
