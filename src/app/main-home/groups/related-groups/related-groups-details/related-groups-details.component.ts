import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { share } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { EventI } from 'src/app/models/event.interface';
import { Groups} from '../../see-groups/groups';
import { RelatedGroupsService } from "../related-groups.service";

@Component({
  selector: 'app-related-groups-details',
  templateUrl: './related-groups-details.component.html',
  styleUrls: ['./related-groups-details.component.scss']
})
export class RelatedGroupsDetailsComponent implements OnInit {
  group!: Groups | null;
  event!: EventI | null;
  constructor(
    private RelatedGroupsService: RelatedGroupsService,
    private EventService: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // const groupId = this.route.snapshot.paramMap.get('id');
    // this.group = this.RelatedGroupsService.getGroup(Number(groupId));

    // if (this.group === null) {
    //   this.router.navigate(['group']);
    // }

    let idGrupos = this.route.snapshot.paramMap.get('id');
    console.log(idGrupos);
    this.RelatedGroupsService.getDetailsRelatedGroup(Number(idGrupos)).subscribe((data: any) => {
      console.log(data);
      this.group = data[0];
    })

    this.EventService.getSigleEventGroup(Number(idGrupos)).subscribe((data: any) => {
      console.log(data);
      this.group = data[0];
    })
  }
}
