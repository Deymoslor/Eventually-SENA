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
  groups$ = this.SeeGroupsService.groups$;
  orderBy$: Observable<string | null> = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('orderBy'))
  );

  orderedGroups$: Observable<Group[]> = combineLatest([
    this.groups$,
    this.orderBy$,
  ]).pipe(
    map(([groups, orderBy]) =>
      orderBy === 'id'
        ? [...groups].sort((a, b) => a.id - b.id)
        : groups
    )
  );

  constructor(private SeeGroupsService: SeeGroupsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
