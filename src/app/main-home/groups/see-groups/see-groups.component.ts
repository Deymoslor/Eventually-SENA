import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { Group } from './group';
import { Groups } from './groups';
import { Likes } from './likes';
import { SeeGroupsService } from './see-groups.service';

@Component({
  selector: 'app-see-groups',
  templateUrl: './see-groups.component.html',
  styleUrls: ['./see-groups.component.scss']
})
export class SeeGroupsComponent implements OnInit {
  id!: number;
  groups!: Groups[];
  group!: Group;
  likes!: Likes[];

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
      this.groups = data;
      console.log(this.groups);
    })
    // this.SeeGroupsService.getLikesGroup(this.auth.desencriptar(localStorage.getItem('id'))).subscribe(data=>{
    //   this.likes = data;
    //   console.log(data);
    // })
  }

}
