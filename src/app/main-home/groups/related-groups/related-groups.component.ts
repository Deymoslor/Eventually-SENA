import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { Groups } from '../see-groups/groups';
import { RelatedGroupsService } from './related-groups.service';

@Component({
  selector: 'app-related-groups',
  templateUrl: './related-groups.component.html',
  styleUrls: ['./related-groups.component.scss']
})
export class RelatedGroupsComponent implements OnInit {
  id!: number;
  groups!: Groups[];
//   get groups(): Groups[] {
//   const groups = this.RelatedGroupsService.getRelatedGroups;

//   if (this.route.snapshot.queryParamMap.get('orderBy') === 'id') {
//     groups.sort((a, b) => a.idGrupos - b.idGrupos);
//   }
//   return groups;
//  }

  constructor(private RelatedGroupsService: RelatedGroupsService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    let idPersona = this.authService.desencriptar(localStorage.getItem('id'));
    console.log(idPersona);
    this.RelatedGroupsService.getRelatedGroups(Number(idPersona)).subscribe(data => {
      console.log(data);

      this.groups = data;
    })
  }

}
