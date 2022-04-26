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
  id!: number;
  groups!: Groups[];

  constructor(
    private YourGroupsService: YourGroupsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let idPersona = localStorage.getItem('id');
    console.log(idPersona);
    this.YourGroupsService.getYourGroups(Number(idPersona)).subscribe(data => {
      console.log(data);

      this.groups = data;
    })
  }

}
