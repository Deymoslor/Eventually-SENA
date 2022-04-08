import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../group';
import { SeeGroupsService } from '../see-groups.service';

@Component({
  selector: 'app-see-group-detail',
  templateUrl: './see-group-detail.component.html',
  styleUrls: ['./see-group-detail.component.scss']
})
export class SeeGroupDetailComponent implements OnInit {

  @Input() childMessage!: number;

  constructor(
    private SeeGroupsService: SeeGroupsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    group!: Group;

  ngOnInit(): void {
    // const idGrupos = this.route.snapshot.paramMap.get('id');
    // this.group = this.SeeGroupsService.getDetailsGroup(Number(idGrupos)).subscribe(data =>{
    //   console.log(data);
    // })

    // if (this.group === null) {
    //   this.router.navigate(['group']);
    // }

    let idGrupos = this.route.snapshot.paramMap.get('id');
    console.log(idGrupos);
    this.SeeGroupsService.getDetailsGroup(Number(idGrupos)).subscribe((data: any) =>{
      console.log(data);
      this.group = data[0];
    })
  }

  ngOnChanges(): void {
    // console.log(this.childMessage);
    // if (this.childMessage > 0) {
    //   this.SeeGroupsService.getDetailsGroup(this.childMessage);
    // } else {

    // }

  }

}
