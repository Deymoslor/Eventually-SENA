import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Group } from '../groups';
import { SeeGroupsService } from '../see-groups.service';

@Component({
  selector: 'app-see-group.detail',
  templateUrl: './see-group-detail.component.html',
  styleUrls: ['./see-group-detail.component.scss']
})
export class SeeGroupDetailComponent implements OnInit {
  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  );
  groups$: Observable<Group | null> = this.id$.pipe(
    switchMap((id) => this.SeeGroupsService.getGroup(id)),
    tap((group) => group === null && this.router.navigate(['group']))
  );
  constructor(
    private SeeGroupsService: SeeGroupsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

}
