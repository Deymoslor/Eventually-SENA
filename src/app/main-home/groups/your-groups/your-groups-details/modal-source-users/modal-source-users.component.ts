import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from "../../../../../dashboard/crud-users/service/userService.service";
import { AuthService } from 'src/app/core/service/auth.service';
import { ListaPersonasI } from 'src/app/dashboard/crud-users/ListaPersonasI.interface';
import { finalize, map } from 'rxjs';

@Component({
  selector: 'app-modal-source-users',
  templateUrl: './modal-source-users.component.html',
  styleUrls: ['./modal-source-users.component.scss']
})
export class ModalSourceUsersComponent implements OnInit {

  public isLoading = false;
  public src: string | undefined;
  public personas$ = [];
  public personas! : ListaPersonasI[];

  constructor(private httpCllient: HttpClient,
              private userService:userService,
              private authService: AuthService,
              private router:Router,) { }

  filterPersona = '';

  ngOnInit(): void {
    this.userService.getAllPersons(1).subscribe((data: any)=>{
      this.personas = data;
      console.log(this.personas);
    });
  }

  // search(value: string): any {
  //   this.isLoading = true;
  //   this.personas$ = this.userService.getSourcePerson(value).pipe(
  //     map( project: ({personas}) => personas.items),
  //     finalize( callback: () => this.isLoading = false)
  //   );
  // }

  // filterList(): void {
  //   this.userService.getAllPersons(1).subscribe((data: any) => {
  //     this.personas = data;
  //     this.personas = this.personas$.filter(item => item.toLowerCase().indexOf(data.toLowerCase()) >= 0);
  //   });
  // }

}
