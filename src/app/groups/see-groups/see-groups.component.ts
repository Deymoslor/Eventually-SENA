import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { Group } from './groups';
import { SeeGroupsService } from './see-groups.service';

@Component({
  selector: 'app-see-groups',
  templateUrl: './see-groups.component.html',
  styleUrls: ['./see-groups.component.scss']
})
export class SeeGroupsComponent implements OnInit {
  get groups(): Group[] {
    const groups = this.SeeGroupsService.groups;

    if (this.route.snapshot.queryParamMap.get('orderBy') === 'id') {
      this.groups.sort((a, b) => a.id - b.id);
    }
    return groups;
  }
  orderBy$: Observable<string | null> = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('orderBy'))
  );

  constructor(private SeeGroupsService: SeeGroupsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
