import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { Groups } from './groups';
import { SeeGroupsService } from './see-groups.service';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-see-groups',
  templateUrl: './see-groups.component.html',
  styleUrls: ['./see-groups.component.scss']
})
export class SeeGroupsComponent implements OnInit {
  id!: number;
  groups!: Groups[];
  // get groups(): Group[] {
  //   const groups = this.SeeGroupsService.groups;

  //   if (this.route.snapshot.queryParamMap.get('orderBy') === 'id') {
  //     this.groups.sort((a, b) => a.id - b.id);
  //   }
  //   return groups;
  // }
  // orderBy$: Observable<string | null> = this.route.queryParamMap.pipe(
  //   map((queryParamMap) => queryParamMap.get('orderBy'))
  // );

  constructor(private SeeGroupsService: SeeGroupsService, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this.SeeGroupsService.getPromotedGroups(this.auth.desencriptar(localStorage.getItem('id'))).subscribe(data=>{
      console.log(data);

      this.groups = data;
    })
  }

}
