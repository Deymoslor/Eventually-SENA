import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groups } from '../see-groups/groups';
import { YourGroupsService } from './your-groups.service';

@Component({
  selector: 'app-your-groups',
  templateUrl: './your-groups.component.html',
  styleUrls: ['./your-groups.component.scss']
})
export class YourGroupsComponent implements OnInit {

  groups!: Groups[];

  constructor(
    private YourGroupsService: YourGroupsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.YourGroupsService.getYourGroups(1).subscribe(data => {
      console.log(data);

      this.groups = data;
    })
  }

}
