import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
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
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  getMessage(id: any){
    console.log(id);
    this.miMessage.emit(id);
  }

  ngOnInit(): void {
    this.YourGroupsService.getYourGroups(this.auth.desencriptar(localStorage.getItem('id'))).subscribe(data => {
      console.log(data);

      this.groups = data;
    })
  }

}
