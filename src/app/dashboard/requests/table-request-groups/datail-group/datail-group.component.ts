import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/dashboard/crud-groups/modal-edit-groups/group.interface';
import { GlobalConstants } from 'src/app/global-constants';
import { SeeGroupsService } from 'src/app/main-home/groups/see-groups/see-groups.service';
import { Groups } from '../../../../main-home/groups/see-groups/groups';
import { LikesI } from '../../../../models/likes';
import { ApiService } from '../../../../services/api.service'

@Component({
  selector: 'app-datail-group',
  templateUrl: './datail-group.component.html',
  styleUrls: ['./datail-group.component.scss']
})
export class DatailGroupComponent implements OnInit {

  @Input() idGroup!: string;

  dataGroup!: Groups;
  likesI!:LikesI[];

  constructor(private api: SeeGroupsService, private apiL: ApiService) { }

  ngOnInit(): void {
    this.api.getDetailsGroup2(this.idGroup).subscribe((data:any) =>{
      this.dataGroup = data[0];
      this.dataGroup.imagen = this.dataGroup.imagen.replace('C:/xampp/htdocs', GlobalConstants.httpLocalHost)
      console.log(this.dataGroup.imagen);
    })
    console.log(this.dataGroup);

    this.apiL.getAllLikes(1).subscribe(data=>{
      this.likesI = data;
    })
  }

}
