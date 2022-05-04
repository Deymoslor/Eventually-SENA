import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groups } from '../see-groups/groups';
import { YourGroupsService } from './your-groups.service';

@Component({
  selector: 'app-your-groups',
  templateUrl: './your-groups.component.html',
  styleUrls: ['./your-groups.component.scss']
})
export class YourGroupsComponent implements OnInit {
  // id!: number;
  groups!: Groups[];
  @Output() miMessage = new EventEmitter<number>();

  constructor(
    private YourGroupsService: YourGroupsService,
    private route: ActivatedRoute
  ) { }

  getMessage(id: any){
    console.log(id);
    this.miMessage.emit(id);
  }

  ngOnInit(): void {
    let idPersona = localStorage.getItem('id');
    this.YourGroupsService.getYourGroups(Number(idPersona)).subscribe(data => {
      console.log(data);

      this.groups = data;
    })
  }

}
