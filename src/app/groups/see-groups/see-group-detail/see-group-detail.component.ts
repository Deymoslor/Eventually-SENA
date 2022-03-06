import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../groups';
import { SeeGroupsService } from '../see-groups.service';

@Component({
  selector: 'app-see-group-detail',
  templateUrl: './see-group-detail.component.html',
  styleUrls: ['./see-group-detail.component.scss']
})
export class SeeGroupDetailComponent implements OnInit {
  group!: Group | null;

  constructor(
    private SeeGroupsService: SeeGroupsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const groupId = this.route.snapshot.paramMap.get('id');
    this.group = this.SeeGroupsService.getGroup(Number(groupId));

    if (this.group === null) {
      this.router.navigate(['group']);
    }
  }

}
